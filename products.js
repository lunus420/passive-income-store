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
        "id": 7416,
        "title": "Brutal: 15-Oz Amazon Grocery Canned 100% Pumpkin Pur\u00e9e $1.05 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$1.05",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fresh-Canned-Pumpkin/dp/B0D1LG7TQ7?pd_rd_w=oLoe2&content-id=amzn1.sym&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9863,
        "title": "Legendary: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 2104,
        "title": "Insane: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 3129,
        "title": "Unbeatable: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 1705,
        "title": "Insane: PRAGMATA (PS5) $50 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G6KM4YBT?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4576,
        "title": "Extreme: New: Ridge Wallet for MagSafe + Power Bank + KeyCase - ONE PIECE - Straw Hat Skulls + ONE PIECE + ONE PIECE $235.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$235.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-MagsafeWallet_PB_KC_StrawHatCrew-01.webp?v=1792530437",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-keycase-one-piece-straw-hat-skulls-one-piece?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 1886,
        "title": "Must-Have: Ryobi ONE+ 18V Hybrid LED Work Light w/ 4.0 Ah Battery & Charger $79 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$79",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.homedepot.com/p/RYOBI.../344286289?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 5073,
        "title": "Savage: PicassoTiles 5-in-1 Magnetic Tile Vehicle Building Set w/ 2 Figures & Car Bases $11.10 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$11.10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0D14QKQZ8?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 5941,
        "title": "Insane: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 8206,
        "title": "Savage: New: Ridge Wallet - Sakura $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/Sakura-Wallet-1-THUMBNAIL_f6ee5045-5a58-4ef3-b4e7-005e715b3c40.jpg?v=1782508910",
        "link": "https://www.ridge.com/products/sakura?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6900,
        "title": "Legendary: New: Ridge Power Bank - 10k mAh - 2026 World Series Champions - Milwaukee Brewers $89.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$89.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MagneticPowerbank-MilwaukeeBrewers-RenderBack.webp?v=1793070311",
        "link": "https://www.ridge.com/products/magnetic-power-bank-2026-world-series-champions-milwaukee-brewers?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9095,
        "title": "Brutal: Costco: CyberPowerPC Desktop: Ryzen 7 9800X3D, RTX 9070 XT, 32GB DDR5, 1TB SSD $2200 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$2200",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.costco.com/p/-/cyberp...4201016368?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 6853,
        "title": "Epic: 21-Ct 1.05-Oz Biena Edamame Beans High Protein Snacks (Variety Pack) $13.30 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$13.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HBT2S...yp_imgToDp?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8170,
        "title": "Epic: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1161,
        "title": "Unbeatable: 6-Pk 14.5-Oz Amazon Fresh Cut Green Beans $3.30 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$3.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...mid=&amp;psc=1?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1594,
        "title": "Epic: Costco: ASUS Vivobook 14 Flip Laptop: Ultra 7 256V, 14\" OLED Touch, 16GB RAM $750 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$750",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.costco.com/p/-/4201036168?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 2842,
        "title": "Brutal: Select Locations: 5-Pk CAT Construction Little Machines Truck Toy Set $4 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$4",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/713036776*Note?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4323,
        "title": "Viral: New: Ridge Wallet - 2026 World Series Champions - Milwaukee Brewers $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MilwaukeeBrewers-Wallet-RenderFront.webp?v=1793070004",
        "link": "https://www.ridge.com/products/2026-world-series-champions-milwaukee-brewers?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 2460,
        "title": "Legendary: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 7658,
        "title": "Brutal: 3-Pk Hanes X-Temp Moisture-Wicking Tees (White, Medium only) $6.35 & More",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$6.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/Unders...2972661334?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 7249,
        "title": "Epic: Fanttik D2 Pocket Self-Leveling Cross-Line Green Laser Level $28 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0C61MK?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 5824,
        "title": "Brutal: 3-Lb Ocean Spray Craisins Dried Cranberries $5.35 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$5.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...X0DER&amp;th=1?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 7510,
        "title": "Brutal: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 3758,
        "title": "Savage: CRAFTSMAN 25' Green High-Visibility Tape Measure $8 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$8",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CP67QWLY?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 9572,
        "title": "Premium: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 5482,
        "title": "Insane: New: Ridge Wallet for MagSafe + KeyCase - Legacy Spec $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/LegacySpec-DDK-Render1.webp?v=1793116585",
        "link": "https://www.ridge.com/products/magsafe-wallet-keycase-legacy-spec?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 8482,
        "title": "Viral: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];