// DOM Elements
const digitalGrid = document.getElementById('digital-grid');
const affiliateGrid = document.getElementById('affiliate-grid');
const header = document.getElementById('header');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');

// State
let cart = [];
const PAYPAL_USER = "lilterry200369";
const SOCIAL_LINKS = [
    { platform: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com" },
    { platform: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com" },
    { platform: "Mastodon", icon: "fab fa-mastodon", url: "https://mastodon.social" }
];

// Format Price
const formatPrice = (price) => {
    return typeof price === 'number' ? `$${price.toFixed(2)}` : price;
};

// Render Functions
function renderDigitalProducts() {
    digitalGrid.innerHTML = '';
    digitalProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'glass-panel product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="badge">${product.badge}</span>
                <img src="${product.image}" loading="lazy" alt="${product.title}">
            </div>
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button onclick="addToCart(${product.id})" class="btn btn-primary" style="width: 100%; text-align: center; border: none;">Add to Cart</button>
                </div>
            </div>
        `;
        digitalGrid.appendChild(card);
    });
}

function renderAffiliateProducts(category = 'All') {
    affiliateGrid.innerHTML = '';

    const filteredProducts = category === 'All'
        ? affiliateProducts
        : affiliateProducts.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'glass-panel product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="badge" style="background: #ff0055; color: #fff;">${product.badge}</span>
                <img src="${product.image}" loading="lazy" alt="${product.title}">
            </div>
            <div class="product-content">
                <div class="product-category">${product.source} • ${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span style="text-decoration: line-through; color: #666; font-size: 0.9rem; margin-right: 10px;">${product.originalPrice}</span>
                    <span style="color: var(--accent-color);">${product.price}</span>
                </div>
                <div class="product-actions">
                    <a href="${product.link}" target="_blank" class="btn" style="width: 100%; text-align: center; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">View on ${product.source}</a>
                </div>
            </div>
        `;
        affiliateGrid.appendChild(card);
    });
}

// Filter Function
window.filterProducts = (category) => {
    // Update active button state
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
    toggleCart(); // Open cart to show user action
};

window.removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
};

function updateCartUI() {
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.innerText = totalItems;

    // Render Items
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

    // Update Total
    total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.innerText = `$${total.toFixed(2)}`;
}

window.checkout = () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    // Paypal.me format: https://paypal.me/username/amount
    const paypalLink = `https://paypal.me/${PAYPAL_USER}/${total.toFixed(2)}`;

    // In a real app, you'd send an order to a backend here.
    // For this passive income setup, we redirect straight to payment.
    if (confirm(`Redirecting to PayPal to complete your purchase of $${total.toFixed(2)}?`)) {
        window.open(paypalLink, '_blank');
        // Clear cart after checkout
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
});
