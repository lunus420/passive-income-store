const digitalProducts = [
    {
        id: 1,
        title: "Ultimate Passive Income Guide 2026",
        category: "Digital",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/YOUR_HANDLE",
        badge: "Best Seller"
    },
    {
        id: 2,
        title: "Crypto Trading Bot V2 (Source Code)",
        category: "Digital",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/YOUR_HANDLE",
        badge: "Popular"
    },
    {
        id: 3,
        title: "Neon Cyberpunk Asset Pack",
        category: "Digital",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/YOUR_HANDLE",
        badge: "New"
    },
    {
        id: 4,
        title: "SaaS Starter Kit (Next.js + Tailwind)",
        category: "Digital",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/YOUR_HANDLE",
        badge: "Hot"
    },
    {
        id: 5,
        title: "AI Prompt Engineering Masterclass",
        category: "Digital",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/YOUR_HANDLE",
        badge: "Trending"
    }
];

const affiliateProducts = [
    {
        "id": 3419,
        "title": "Viral: 6.6-Oz Calvin Klein Unisex One Eau De Toilette Perfume Spray $31.70 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19180009-calvin-klein-one-eau-de-toilette-perfume-spray-6-6-oz-31-7?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6452,
        "title": "Must-Have: Prime Members: 3-Tier Smiry 27\" Bamboo Stackable Shoe Rack Organizer from $10.80 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19180192-prime-members-3-tier-smiry-27-bamboo-stackable-shoe-rack-organizer-regular-10-79-thick-13-19-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3522,
        "title": "Exclusive: MGA's Miniverse Make It Mini Spaces: Hello Kitty Building Set $13.20 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19179769-mga-s-miniverse-make-it-mini-spaces-hello-kitty-building-set-13-18-free-shipping-w-prime-or-on-35?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4052,
        "title": "Exclusive: 75\" Samsung U7900 Series 4K UHD 60Hz Smart Tizen TV $448 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19179148-75-samsung-class-u7900-series-uhd-4k-smart-tizen-tv-2025-448-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1830,
        "title": "Insane: GIGABYTE X870E AORUS ELITE MB + AMD Ryzen 7 9850X3D CPU + Corsair M75 Mouse $600 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19179502-bundle-gigabyte-x870e-aorus-elite-mb-amd-ryzen-7-9850x3d-cpu-corsair-m75-wireless-rgb-lightweight-fps-gaming-mouse-599-99-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1921,
        "title": "Unbeatable: Slickdeals Daily Draw Giveaway \u2013 Enter Now for a Chance to Win! (See Official Rules) ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/18822175-slickdeals-daily-draw-giveaway-enter-now-for-a-chance-to-win-see-official-rules?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3698,
        "title": "Must-Have: 32-Oz Tim Hortons Medium Roast Coffee (Whole Bean) $12.15 w/ Subscribe & Save",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19177324-32-oz-tim-hortons-medium-roast-coffee-whole-bean-12-15-w-s-s-free-shipping-w-prime-or-on-35?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7402,
        "title": "Must-Have: 24-Ct TheraBreath Dry Mouth Dentist Formulated Lozenges Sugar-Free (Mandarin Mint) $2.95 w/ Subscribe & Save",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19178320-24-count-therabreath-dry-mouth-dentist-formulated-lozenges-sugar-free-mandarin-mint-2-93-free-shipping-w-prime-or-on-35?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7831,
        "title": "Premium: Select Amazon Accounts: Echo Device Sale: Amazon Echo Dot Max $50 & More + Free S/H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19181425-select-amazon-accounts-echo-device-sale-amazon-echo-dot-max-50-more-free-s-h?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8319,
        "title": "Unbeatable: 8-Pack Chfeila Dual Spring & Clasp Cord Organizer $4 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19119994-8-pack-chfeila-dual-spring-clasp-cord-organizer-black-3-98-free-shipping-w-prime-or-on-35?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];