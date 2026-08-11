// --- Click tracking (GA4) ---
function trackProductClick(id, title, type, price) {
    try {
        if (typeof gtag === 'function') {
            gtag('event', 'select_item', {
                item_list_name: type === 'digital' ? 'Digital Products' : 'Affiliate Deals',
                items: [{
                    item_id: String(id),
                    item_name: title,
                    item_category: type,
                    price: price || 0
                }]
            });
        }
    } catch (e) { /* never block navigation on tracking errors */ }
}

// DOM Elements
const digitalGrid = document.getElementById('digital-grid');
const affiliateGrid = document.getElementById('affiliate-grid');
const header = document.getElementById('header');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const socialLinks = document.getElementById('social-links');
const countdownElement = document.getElementById('countdown-timer');

// State
let cart = [];
const PAYPAL_USER = "Explode420";
const SOCIAL_LINKS = [
    { platform: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com/teknest", color: "#1DA1F2" },
    { platform: "Facebook", icon: "fab fa-facebook", url: "https://facebook.com/teknest", color: "#1877F2" },
    { platform: "Reddit", icon: "fab fa-reddit", url: "https://reddit.com/r/teknestdeals", color: "#FF4500" },
    { platform: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/teknest", color: "#E4405F" },
    { platform: "YouTube", icon: "fab fa-youtube", url: "https://youtube.com/@teknest", color: "#FF0000" }
];

const formatPrice = (price) => {
    return typeof price === 'number' ? `$${price.toFixed(2)}` : price;
};

const getBadgeColor = (badge) => {
    if (badge === "LEGIT TECH") return "#00ccff";
    if (badge === "TEMU DEAL") return "#ff6600";
    if (badge === "AMAZON DEAL") return "#ff9900";
    if (["HOT", "VIRAL", "BRUTAL", "SAVAGE", "EXTREME"].includes(badge)) return "#ff0055";
    return "#666";
};

// --- Countdown Timer (midnight reset = new deals drop) ---
function updateCountdown() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (countdownElement) {
        countdownElement.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// --- Exit-Intent Popup ---
let exitPopupShown = false;
function showExitPopup() {
    if (exitPopupShown) return;
    exitPopupShown = true;
    document.getElementById('exit-popup').classList.add('show');
}
function closeExitPopup() {
    document.getElementById('exit-popup').classList.remove('show');
}
// Desktop: mouse leaves top of page
document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0) showExitPopup();
});
// Mobile: triggered after 30 seconds + back button
let mobileExitTimer = setTimeout(() => {
    if (!exitPopupShown && window.innerWidth <= 768) showExitPopup();
}, 30000);

// --- Newsletter ---
window.subscribeNewsletter = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const email = input.value;
    // Track subscription
    try {
        if (typeof gtag === 'function') {
            gtag('event', 'newsletter_signup', { method: 'footer' });
        }
    } catch (e) {}
    input.value = '';
    const form = e.target;
    form.innerHTML = '<p style="color: var(--accent-color); font-weight: 600; font-size: 1.1rem;"><i class="fas fa-check-circle"></i> You\'re in! Check your inbox.</p>';
};

// Render Functions
function renderDigitalProducts(filter = 'All') {
    digitalGrid.innerHTML = '';
    const filtered = filter === 'All' 
        ? digitalProducts 
        : digitalProducts.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'glass-panel product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="badge" style="background: #00ccff; color: #fff;">DIGITAL</span>
                <img src="${product.image}" loading="lazy" alt="${product.title}">
            </div>
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <a href="${product.link}" target="_blank" class="btn btn-primary" style="width: 100%; text-align: center; border: none; text-decoration: none; display: block;">ACCESS NOW</a>
                </div>
            </div>
        `;
        digitalGrid.appendChild(card);
        const digitalLink = card.querySelector('a');
        if (digitalLink) digitalLink.addEventListener('click', () => trackProductClick(product.id, product.title, 'digital', product.price));
    });
}

function renderAffiliateProducts(category = 'All') {
    affiliateGrid.innerHTML = '';

    const filteredProducts = category === 'All'
        ? affiliateProducts
        : affiliateProducts.filter(p => p.category === category);

    // Show first 12, then load more
    const visibleCount = 12;
    const toShow = filteredProducts.slice(0, visibleCount);
    window._remainingProducts = filteredProducts.slice(visibleCount);

    toShow.forEach(product => {
        const badgeColor = getBadgeColor(product.badge);
        const card = document.createElement('div');
        card.className = 'glass-panel product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="badge ${['HOT','VIRAL','BRUTAL','SAVAGE','EXTREME'].includes(product.badge) ? 'badge-hot' : ''}" style="background: ${badgeColor}; color: #fff;">${product.badge}</span>
                <img src="${product.image}" loading="lazy" alt="${product.title}">
            </div>
            <div class="product-content">
                <div class="product-category">${product.source} • ${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span style="text-decoration: line-through; color: #666; font-size: 0.9rem; margin-right: 10px;">${product.originalPrice}</span>
                    <span style="color: var(--accent-color);">${product.price}</span>
                </div>
                ${['HOT','VIRAL','BRUTAL','SAVAGE','EXTREME'].includes(product.badge) ? '<div class="stock-note"><i class="fas fa-fire"></i>Selling fast — grab it before it\'s gone</div>' : ''}
                <div class="product-actions">
                    <a href="${product.link}" target="_blank" class="btn" style="width: 100%; text-align: center; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">View on ${product.source}</a>
                </div>
            </div>
        `;
        affiliateGrid.appendChild(card);
        const affLink = card.querySelector('a');
        if (affLink) affLink.addEventListener('click', () => trackProductClick(product.id, product.title, 'affiliate', 0));
    });

    // Show/hide load more button
    const loadMoreWrap = document.getElementById('load-more-wrap');
    if (loadMoreWrap) {
        loadMoreWrap.style.display = window._remainingProducts.length > 0 ? 'block' : 'none';
    }
}

// Load More
window.loadMore = () => {
    const next = window._remainingProducts.slice(0, 8);
    window._remainingProducts = window._remainingProducts.slice(8);

    next.forEach(product => {
        const badgeColor = getBadgeColor(product.badge);
        const card = document.createElement('div');
        card.className = 'glass-panel product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="badge ${['HOT','VIRAL','BRUTAL','SAVAGE','EXTREME'].includes(product.badge) ? 'badge-hot' : ''}" style="background: ${badgeColor}; color: #fff;">${product.badge}</span>
                <img src="${product.image}" loading="lazy" alt="${product.title}">
            </div>
            <div class="product-content">
                <div class="product-category">${product.source} • ${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span style="text-decoration: line-through; color: #666; font-size: 0.9rem; margin-right: 10px;">${product.originalPrice}</span>
                    <span style="color: var(--accent-color);">${product.price}</span>
                </div>
                ${['HOT','VIRAL','BRUTAL','SAVAGE','EXTREME'].includes(product.badge) ? '<div class="stock-note"><i class="fas fa-fire"></i>Selling fast — grab it before it\'s gone</div>' : ''}
                <div class="product-actions">
                    <a href="${product.link}" target="_blank" class="btn" style="width: 100%; text-align: center; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">View on ${product.source}</a>
                </div>
            </div>
        `;
        affiliateGrid.appendChild(card);
        const affLink = card.querySelector('a');
        if (affLink) affLink.addEventListener('click', () => trackProductClick(product.id, product.title, 'affiliate', 0));
    });

    const loadMoreWrap = document.getElementById('load-more-wrap');
    if (loadMoreWrap) {
        loadMoreWrap.style.display = window._remainingProducts.length > 0 ? 'block' : 'none';
    }
};

// Filter Function
window.filterProducts = (category) => {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.innerText === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderAffiliateProducts(category);
};

// Cart Functions
window.toggleCart = () => {
    cartOverlay.classList.toggle('open');
    cartSidebar.classList.toggle('open');
};

window.addToCart = (id) => {
    const product = digitalProducts.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    toggleCart();
};

window.removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
};

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.innerText = totalItems;
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                <div class="remove-btn" onclick="removeFromCart(${item.id})">Remove</div>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
    total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.innerText = `$${total.toFixed(2)}`;
}

window.checkout = () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const paypalLink = `https://paypal.me/${PAYPAL_USER}/${total.toFixed(2)}`;
    try {
        if (typeof gtag === 'function') {
            gtag('event', 'begin_checkout', { value: total, currency: 'USD' });
        }
    } catch (e) {}
    if (confirm(`Redirecting to PayPal to complete your purchase of $${total.toFixed(2)}?`)) {
        window.open(paypalLink, '_blank');
        cart = [];
        updateCartUI();
        toggleCart();
    }
};

// Scroll Effect for Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function renderSocialLinks() {
    const containers = document.querySelectorAll('.social-links');
    containers.forEach(container => {
        container.innerHTML = SOCIAL_LINKS.map(s => `
            <a href="${s.url}" target="_blank" title="${s.platform}">
                <i class="${s.icon}"></i>
            </a>
        `).join('');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderDigitalProducts();
    renderAffiliateProducts();
    renderSocialLinks();
    
    // Update deal count stat
    const totalDeals = (typeof digitalProducts !== 'undefined' ? digitalProducts.length : 0) + 
                       (typeof affiliateProducts !== 'undefined' ? affiliateProducts.length : 0);
    const statDeals = document.getElementById('stat-deals');
    if (statDeals) statDeals.textContent = totalDeals + '+';
});
