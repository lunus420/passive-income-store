const digitalProducts = [
    {
        id: 1,
        title: "[FREE] The Freelancer Money Starter Checklist — 17 Things To Do Before Your Next Invoice",
        category: "Digital",
        price: "FREE",
        image: "covers/media-generation-05-starter-checklist-cover-0-6823fe65-eaec-4085-b5b7-a725daab6e98.png",
        link: "https://payhip.com/b/n1DZU",
        badge: "FREE"
    },
    {
        id: 2,
        title: "Irregular Income Budget Dashboard — Google Sheets + Excel Template for Freelancers",
        category: "Digital",
        price: 19,
        image: "covers/media-generation-01-budget-dashboard-cover-0-4e1871c4-f74e-4d5e-a98f-d472b844a031.png",
        link: "https://payhip.com/b/h2wnZ",
        badge: "Best Seller"
    },
    {
        id: 3,
        title: "The Complete Irregular Income Toolkit — All 4 Products (Save $17)",
        category: "Digital",
        price: 29,
        image: "covers/media-generation-06-toolkit-bundle-cover-0-3fb9c098-c1dc-4fb4-a4ee-01ad3fa3bbeb.png",
        link: "https://payhip.com/b/daxf9",
        badge: "Best Value"
    },
    {
        id: 4,
        title: "Freelance Invoice Tracker — Never Lose Track of Who Owes You Again",
        category: "Digital",
        price: 12,
        image: "covers/media-generation-02-invoice-tracker-cover-0-6f09df05-1337-47e5-b7ab-49bc4ed5f05c.png",
        link: "https://payhip.com/b/aN6yO",
        badge: "NEW"
    },
    {
        id: 5,
        title: "Pay Yourself First — 12-Month Savings Goal Tracker (Printable PDF)",
        category: "Digital",
        price: 9,
        image: "covers/media-generation-03-savings-tracker-cover-0-5135e066-68e0-4510-a62e-ec234e339681.png",
        link: "https://payhip.com/b/4KAef",
        badge: "NEW"
    },
    {
        id: 6,
        title: "30-Day No-Spend Challenge — Spending Reset for Variable Income (Printable PDF)",
        category: "Digital",
        price: 7,
        image: "covers/media-generation-04-no-spend-challenge-cover-0-1b982ed5-35b2-4d29-b199-4eec69c30842.png",
        link: "https://payhip.com/b/KLoE8",
        badge: "NEW"
    },
    {
        id: 7,
        title: "Ultimate Passive Income Guide 2026",
        category: "Digital",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://paypal.me/Explode420",
        badge: "Best Seller"
    }
];

const affiliateProducts = [
    {
        "id": 3667,
        "title": "Extreme: 5' HANYCONY Surge Protector Power Strip: 8x Outlets, 4x USB Ports (2x USB-C) $10 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B092J8LPWR/r?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2140,
        "title": "Extreme: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 8191,
        "title": "Legendary: GINJEE Cordless Men's Hair Clipper & Trimmer Set (Gold) $20 + Free S&H",
        "category": "Beauty & Health",
        "source": "Slickdeals",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G7FYR9Y6?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 7923,
        "title": "Legendary: 12\" Amazon Basics Tri-Ply Stainless Steel Fry Pan $21.90 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$21.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FVS92?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 8362,
        "title": "Premium: Hyrule Warriors: Age of Calamity + Expansion Pass (Nintendo Switch Digital) $33.60 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$33.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/208554908?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 8243,
        "title": "Extreme: iBUYPOWER Slate Gaming Desktop PC: $900 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$900",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/i...ku/6692066?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6996,
        "title": "Elite: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 6129,
        "title": "Elite: 58-Pc LEGO Star Wars The Mandalorian & Grogu\u2019s Speeder Bike Building Toy $7 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$7",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DJ1BQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3493,
        "title": "Savage: Shark IY143H Cordless Pet Cordless Lightweight Stick Vacuum Cleaner $180 + Free S/H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$180",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GZSST8ZT?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8525,
        "title": "Legendary: 12-Pk 12-Oz Gatorade Lower Sugar Electrolyte Sports Drink (Rain Berry) $4.50 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$4.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0743H6CSN?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 8881,
        "title": "Exclusive: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1538,
        "title": "Premium: adidas Men's Alphaskin Beanie (Black / Reflective Silver) $10.80 + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$10.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.ebay.com/itm/960071976968?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "TOP PICK"
    },
    {
        "id": 7610,
        "title": "Extreme: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 2247,
        "title": "Epic: 14-Qt Gourmia All-in-One Air Fryer, Oven, Rotisserie & Dehydrator $55 + Free S/H",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$55",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/GOURMI...5466948866?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 6787,
        "title": "Elite: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8034,
        "title": "Epic: 12-mo Xbox Game Pass Essential Membership + Chronostorm: Siberian Border (PCDD) $61.45 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$61.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.newegg.com/microsoft/...6888351003?ref=money_maker_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];