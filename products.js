const digitalProducts = [
    {
        id: 1,
        title: "Ultimate Passive Income Guide 2026",
        category: "Digital",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/lilterry200369",
        badge: "Best Seller"
    },
    {
        id: 2,
        title: "Crypto Trading Bot V2 (Source Code)",
        category: "Digital",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/lilterry200369",
        badge: "Popular"
    },
    {
        id: 3,
        title: "Neon Cyberpunk Asset Pack",
        category: "Digital",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/lilterry200369",
        badge: "New"
    },
    {
        id: 4,
        title: "SaaS Starter Kit (Next.js + Tailwind)",
        category: "Digital",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/lilterry200369",
        badge: "Hot"
    },
    {
        id: 5,
        title: "AI Prompt Engineering Masterclass",
        category: "Digital",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/lilterry200369",
        badge: "Trending"
    }
];

const affiliateProducts = [
    {
        "id": 7352,
        "title": "Unbeatable: 20-Count TAZO Unsweetened Herbal Tea Bags (Passion or Wild Sweet Orange) $2.85 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19180120-20-count-tazo-herbal-tea-bags-2-flavors-2-87-w-s-s-free-shipping-w-prime-or-on-35?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4989,
        "title": "Epic: adidas Lunar New Year Sale: Select Items: 35% Off + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19182667-adidas-35-off-lunar-new-year-sale-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7328,
        "title": "Must-Have: Prime Members: 2-Pack vancasso Elevated Ceramic Cat Bowls (5.1\" H, 6.2\" W) $14.40 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19182394-prime-members-2-pack-vancasso-ceramic-elevated-cat-bowls-white-14-39-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4980,
        "title": "Epic: 103-Pc SHOCKWAVE Impact-Duty Alloy Steel Screw Driver Bit Set w/ Socket Adapter Set $34.95 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19183732-100-piece-milwaukee-shockwave-impact-duty-alloy-steel-screw-driver-bit-3-piece-socket-adapter-set-34-97-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4002,
        "title": "Insane: Slickdeals Daily Draw Giveaway \u2013 Enter Now for a Chance to Win! (See Official Rules) ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/18822175-slickdeals-daily-draw-giveaway-enter-now-for-a-chance-to-win-see-official-rules?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1561,
        "title": "Insane: Total Wireless: Bring Your Own Smartphone, Get 50% Off Prepaid Service Plans from $20/mo. (for Up to 5 Years) - New Customers Only",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19160281-total-wireless-bring-your-own-smartphone-get-50-off-prepaid-service-plans-from-20-mo-for-up-to-5-years-new-customers-only?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1531,
        "title": "Exclusive: 18-Count Purina DentaLife Daily Oral Care Dog Sticks (Large Chews) $5.60 w/ Subscribe & Save",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19183603-ymmv-5-59-18-count-purina-dentalife-daily-oral-care-dog-sticks-large-chews?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8647,
        "title": "Epic: Thrustmaster T248 Hybrid Drive Force Feedback Racing Wheel & Magnetic Pedals (Xbox/PC) $240 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19179334-thrustmaster-t248-hybrid-drive-force-feedback-racing-wheel-magnetic-pedals-xbox-series-x-s-xbox-one-pc-239-99-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7712,
        "title": "Must-Have: 58-Pack Quaker Chewy Granola Bars (4 Flavor Chewy & Dipps Variety Pack) $10.15 w/ Subscribe & Save",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19184419-sns-10-16-58-pack-quaker-chewy-granola-bars-4-flavor-chewy-dipps-variety-pack-at-amazon-17-5-each?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 5379,
        "title": "Insane: 2-Piece RQP Men's Long Sleeve Pajama set (Various) $12 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19183681-2-piece-rqp-men-s-pajama-set-various-11-99-free-shipping-w-prime-or-on-35?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];