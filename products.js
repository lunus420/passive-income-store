const digitalProducts = [
    {
        id: 1,
        title: "Ultimate Passive Income Guide 2026",
        category: "Digital",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        badge: "Best Seller"
    },
    {
        id: 2,
        title: "Crypto Trading Bot V2 (Source Code)",
        category: "Digital",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        badge: "Popular"
    },
    {
        id: 3,
        title: "Neon Cyberpunk Asset Pack",
        category: "Digital",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        badge: "New"
    },
    {
        id: 4,
        title: "SaaS Starter Kit (Next.js + Tailwind)",
        category: "Digital",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        badge: "Hot"
    },
    {
        id: 5,
        title: "AI Prompt Engineering Masterclass",
        category: "Digital",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        badge: "Trending"
    }
];

const affiliateProducts = [
    {
        "id": 3432,
        "title": "Premium: 412-Piece LEGO Looney Tunes Sweetheart Tweety Bird Building Kit $24 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19168825-23-99-412-piece-lego-seasonal-looney-tunes-sweetheart-tweety-bird-40824-2025-at-amazon?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6037,
        "title": "Premium: adidas Men's VL Court 3.0 Shoes (Various Colors) $24 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19163368-adidas-men-s-vl-court-3-0-shoes-6-5-14-various-24-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 2088,
        "title": "Insane: Heart Box Valentine Candies w/ Plush (various) $10.20 + Free Store Pickup",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19171897-heart-box-valentine-candies-with-plush-3-17oz-kfc-ore-ida-dunkin-donuts-kraft-mac-cheese-and-claussen-pickle-10-19?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3004,
        "title": "Epic: Slickdeals Daily Draw Giveaway \u2013 Enter Now for a Chance to Win! (See Official Rules) ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/18822175-slickdeals-daily-draw-giveaway-enter-now-for-a-chance-to-win-see-official-rules?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4745,
        "title": "Unbeatable: H&R Block Tax Software Deluxe + State 2025 (Digital) + NordVPN Basic (10 Device/1yr) $25 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19171462-h-r-block-tax-state-and-nord-vpn-24-99?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 5427,
        "title": "Insane: Select Amazon Accounts: Harry's Shaving Kit w/ 1 Handle, 3 Blade Refills & Shave Gel $3.80 w/ Subscribe & Save",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19172911-ymmv-s-s-ac-3-77-harry-s-original-shaving-kit-for-men-at-amazon?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 9305,
        "title": "Epic: Prime Members: UGREEN HiTune S3 Open Ear Bluetooth Bluetooth $16 & More + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19169971-prime-members-ugreen-hitune-s3-open-ear-bluetooth-bluetooth-16-more-free-shipping?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6969,
        "title": "Premium: Super7 Fun! Fun! 5\" Toho Godzilla '89 Vinyl Collectible Figure (Kaiju Classic) $13 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19172467-super7-fun-fun-5-toho-godzilla-89-vinyl-collectible-figure-kaiju-classic-13?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 2526,
        "title": "Premium: 65\" TCL Q Series 65QM7K 4K UHD HDR QD-Mini LED Smart Google TV $798 + Free Shipping",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19132432-797-97-65-tcl-qm7k-qd-mini-led-4k-144hz-google-smart-tv-at-amazon?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4231,
        "title": "Insane: 2-Pack TOPIEI Bluetooth Sleep Headphones Headband (Black + Grey) $13.20 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "Check Site",
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        "link": "https://slickdeals.net/f/19171732-2-pack-topiei-bluetooth-sleep-headphones-headband-13-19-free-shipping-w-prime-or-on-35?utm_source=rss&utm_content=fp&utm_medium=RSS2&ref=money_maker_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];