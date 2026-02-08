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
        "id": 5736,
        "title": "Premium: Select Accounts: The Beard Club Men's Straight Razor w/ 5 Blades $5.40 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19183987-ac-5-38-the-beard-club-men-s-straight-razor-w-5-replaceable-stainless-steel-blades-at-amazon?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1799,
        "title": "Exclusive: Costco Members: Copper & Oak Men's Shirt Jacket: 10 for $49.70, 5 for $29.85 1 for $10 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19187062-costco-members-copper-oak-men-s-shirt-jacket-10-for-49-70-5-for-29-85-or-1-for-9-97-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7960,
        "title": "Viral: 75\" Hisense QD6 Hi-QLED 4K UHD Fire TV + 32\" Hisense 720P Roku TV $400 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19173184-75-hisense-qd6-hi-qled-4k-uhd-fire-tv-32-hisense-720p-roku-tv-400-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7505,
        "title": "Premium: Slickdeals Daily Draw Giveaway \u2013 Enter Now for a Chance to Win! (See Official Rules) ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/18822175-slickdeals-daily-draw-giveaway-enter-now-for-a-chance-to-win-see-official-rules?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 5140,
        "title": "Exclusive: Select Costco Stores: 98\" TCL 98QM6K Pro QM6K Pro Series 4K UHD QD-Mini LED TV $1300 (In-Store Only)",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19182226-costco-b-m-98-tcl-98qm6k-pro-qm6k-pro-series-4k-uhd-qd-mini-led-smart-tv-1299?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8680,
        "title": "Premium: 2-Pack 16-Oz Pace Picante Sauce Jars (Hot) $3.80 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19186807-2-pack-16-oz-pace-picante-sauce-jars-hot-3-80?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1602,
        "title": "Epic: The Smurfs 2: Prisoner of the Green Stone (Nintendo Switch) $20.25 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19184335-the-smurfs-2-prisoner-of-the-green-stone-nintendo-switch-physical-20-23-free-shipping-w-prime-or-on-35?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1701,
        "title": "Insane: Select Amazon Accounts: Warhammer 40,000: Space Marine 2 (PS5) $25.25 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19185454-ymmv-ac-25-26-warhammer-40-000-space-marine-2-playstation-5-at-amazon?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3059,
        "title": "Epic: Awearness Kenneth Cole Men's Slim Fit Performance Tech Chinos (Weathervane Gry) $12.75 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19186504-awearness-kenneth-cole-men-s-slim-fit-performance-tech-chinos-weathervane-gry-12-74-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4325,
        "title": "Insane: 4-Pc Amazon Basics Packing Travel Organizer Cubes Set (Slim, Small, Medium, Large) from $7.35 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19161541-7-82-4-piece-amazon-basics-packing-travel-organizer-cubes-set-small-medium-large-at-amazon?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];