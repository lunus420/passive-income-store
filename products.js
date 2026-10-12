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
        "id": 5398,
        "title": "Viral: Popilush Women's Long Sleeve Jumpsuit w/ Built-In Bra $14.80 + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$14.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CF94ZFHZ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 6359,
        "title": "Extreme: 2-Pk 17-Oz Bachan's Japanese Barbecue Sauce (The Original) $7.45 ",
        "category": "Food",
        "source": "Slickdeals",
        "price": "$7.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Bachans-Japanese-Barbecue-Original-Preservatives/dp/B0D183X5FN/ref=sr_1_5?cri&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 8871,
        "title": "Unbeatable: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Home",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2461,
        "title": "Premium: Prime Members in Select Locations: Medium Hass Avocado $0.25 + Free S&H on $25+",
        "category": "Food",
        "source": "Slickdeals Food",
        "price": "$0.25",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B000NOGKN4?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 5322,
        "title": "Extreme: esonstyle Bluetooth 6.0 IPX7 Waterproof Bone Conduction Headphones $20 + Free S&H",
        "category": "Electronics",
        "source": "Slickdeals Toys",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HM3TPPKB?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2353,
        "title": "Insane: Select Accounts: 20-Oz Chex Mix Resealable Tub (Cheddar) $5.55 w/ S&S",
        "category": "Food",
        "source": "Slickdeals",
        "price": "$5.55",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0FDCNQ3DV/?fp&tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 8967,
        "title": "Viral: The Wallflowers: Exit Wounds (Vinyl LP) $10 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.bestbuy.com/product/t...c=pdp_page?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 7664,
        "title": "Viral: RUNBOX Genuine Leather Bifold Slim Wallet w/ RFID Blocking $18 + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals Food",
        "price": "$18",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HCVTNQD2?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 9679,
        "title": "Epic: Skirfy Kids Inflatable Refrigerator Halloween Costume $16 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$16",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H3LDBWS1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2732,
        "title": "Must-Have: 707-Pc LEGO Technic Aston Martin Valkyrie Building Toy (42208, 2025) $31.50 + Free Pickup",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$31.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.target.com/p/lego-tec...A-94152689?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 1112,
        "title": "Exclusive: 806-Pc LEGO Technic Lamborghini Hurac\u00e1n Tecnica Sports Car Building Set $35 + Free Pickup",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.target.com/p/lego-tec...A-87830581?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1936,
        "title": "Exclusive: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4523,
        "title": "Premium: 290-Pc LEGO Disney Princess Advent Calendar 2026 Building Set $30 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G5QHSJBB?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7374,
        "title": "Insane: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Electronics",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2981,
        "title": "Premium: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6735,
        "title": "Exclusive: HiLife 700W 240-mL Corded Handheld Clothes Steamer $10 ",
        "category": "Home",
        "source": "Slickdeals",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GTQV2WKP?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6837,
        "title": "Extreme: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Home",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8633,
        "title": "Elite: 4-Pk 11-Oz Ensure Max 30g Protein Shake (Vanilla or Milk Chocolate) 2 for $21.95 + $10.97 Walmart Cash ",
        "category": "Food",
        "source": "Slickdeals",
        "price": "$21.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.walmart.com/ip/Max-Pr...8065605033?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1197,
        "title": "Must-Have: 293-pc LEGO Star Wars Advent Calendar 2026 (75456) $30 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G5QKD8ZS?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 9333,
        "title": "Extreme: WORKPRO 3-Tier Folding Collapsible Service Cart w/ Wheels (210-lb Capacity) $74 + Free S&H",
        "category": "Home",
        "source": "Slickdeals Food",
        "price": "$74",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/WORKPR...6018272?ad&ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 6449,
        "title": "Brutal: 12-Pc TILUCK Stainless Steel Nesting Measuring Cups w/ Silicone Handles $13.75 ",
        "category": "Home",
        "source": "Slickdeals Food",
        "price": "$13.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F4CYWM5J?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4356,
        "title": "Brutal: Select Stores: 764-Pc LEGO Harry Potter Luna Lovegood\u2019s House Building Set $63 + Free Pickup",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$63",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.target.com/p/lego-har...A-94756925?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4834,
        "title": "Viral: 2-Pk Husky 850lm Compact Rechargeable Utility Light $14.90 + Free S&H",
        "category": "Electronics",
        "source": "Slickdeals",
        "price": "$14.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.homedepot.com/p/Husky.../341321097?ref=money_maker_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];