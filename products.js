const digitalProducts = [
    {
        id: 1,
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
        "id": 4795,
        "title": "Extreme: 6.7-Oz NIVEA Skin Firming & Anti-Wrinkle Neck & Chest Cream w/ Q10 & Creatine $3.60 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$3.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CF2TGX9K?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 1410,
        "title": "Exclusive: New: Discbound Journal Refill - Blank (Standard 6\" x 8.5\") $14.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$14.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/blank-1-badge.jpg?v=1788467062",
        "link": "https://ugmonk.com/products/discbound-journal-refill-blank-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2559,
        "title": "Brutal: 12-Pk 12-Oz Dr Pepper Strawberries & Cream Soda Pop Beverage 3 for $13.75 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$13.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BFTZ74WD?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 7958,
        "title": "Brutal: seaistar 30W 50000mAh Portable Charger USB-C Power Bank (Gray) $15 + Free S&H w/ Amazon Prime",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G6ZBT?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 6339,
        "title": "Insane: Bandai 30MM Armored Core VI Fires of Rubicon RaD CC-2000 Orbiter Nightfall Model Kit $29.95 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$29.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CYG44D3H?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7347,
        "title": "Extreme: New: Discbound Journal Refill - Lined (Standard 6\" x 8.5\") $14.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$14.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/lined-1-badge.jpg?v=1788467075",
        "link": "https://ugmonk.com/products/discbound-journal-refill-lined-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3265,
        "title": "Savage: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-green?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4745,
        "title": "Premium: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 8705,
        "title": "Savage: PINSPARK Women's Long Sleeve V Neck Workout Top (UPF 50+) $5 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HDCW5L2T?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 1607,
        "title": "Extreme: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 2595,
        "title": "Brutal: Hoover SmartWash Pet Automatic Upright Carpet Washer (FH53010) $187 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$187",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0013YPWE6?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3094,
        "title": "Premium: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9606,
        "title": "Viral: Select Accounts: Kind Breakfast Protein Bars, Snack Bars, Granola & More Extra 35% Off w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "Check Deal",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/promotion/...PKK?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1259,
        "title": "Must-Have: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5560,
        "title": "Premium: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 2115,
        "title": "Exclusive: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2762,
        "title": "Must-Have: 4-ct 7.5-8-oz Lay's Potato Chips (various) + $2 Walmart Cash $10 + Store Pick Up",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$2",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.walmart.com/search?q=...=price_low&ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 7155,
        "title": "Savage: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7377,
        "title": "Brutal: 3-pc Azaeahom Bamboo Cutting Board Set (Brown) $15 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B002M782UO?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 3717,
        "title": "Viral: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6282,
        "title": "Unbeatable: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6462,
        "title": "Extreme: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 5794,
        "title": "Unbeatable: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 8766,
        "title": "Extreme: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];