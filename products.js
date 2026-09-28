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
        "id": 1538,
        "title": "Elite: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7173,
        "title": "Unbeatable: KADES Grade 2 Titanium Silicone Magnetic Band for Apple Watch Ultra (Various) from $26.40 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$26.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G8FM1P8R?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6678,
        "title": "Extreme: Prime Members: Dune Deluxe Hardcover Edition $16.20 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$16.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/0593548906?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2867,
        "title": "Insane: Select Amazon Accts: 5-Lbs. Fernes Hydrolyzed Collagen Peptides Protein Powder $27.60 w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals",
        "price": "$27.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DSCML33G?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3655,
        "title": "Unbeatable: New: Discbound Heirloom Journal Bundle (Tan Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-tan.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-tan-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 7629,
        "title": "Brutal: 8.85-Oz. RITZ Fresh Stacks (6 Multi Snack Packs) 2 for $6 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Stacks-Ori..._puis?th=1&tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 1147,
        "title": "Brutal: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9081,
        "title": "Must-Have: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 3828,
        "title": "Elite: Labiim 110000-RPM Ionic Hair Dryer (3 Colors) $20 + Free S&H",
        "category": "Beauty & Health",
        "source": "Slickdeals",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H9LC8G35?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 6420,
        "title": "Premium: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 8082,
        "title": "Viral: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8626,
        "title": "Premium: 20.3oz PayDay Peanut Caramel Snack Size Halloween Candy (Jumbo Bag) $8 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$8",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.walmart.com/ip/Payday...irect=true?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 2548,
        "title": "Insane: Select Accts: 120-Ct Bestpresso for Nespresso Original Coffee Pods (Variety Pack) $21.45 w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$21.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B01EIA2YXI?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 1119,
        "title": "Viral: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3082,
        "title": "Elite: Toughergun Men's Slim RFID-Blocking Wallet w/ Money Clip $5 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B073D2J5ZS?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9045,
        "title": "Must-Have: New: Analog - Today Cards (3-Pack) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-new2_ff126a76-c2f8-43b3-b120-3cbffb9d01ea.jpg?v=1773953342",
        "link": "https://ugmonk.com/products/analog-today-cards-3-pack?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 7400,
        "title": "Extreme: HOTO Pocket-Size Laser Measuring Tool $21 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$21",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09156YD8P?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 3189,
        "title": "Extreme: New: Analog - Today Cards $13.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$13.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-card.jpg?v=1790177479",
        "link": "https://ugmonk.com/products/analog-today-cards-1-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7874,
        "title": "Must-Have: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 4152,
        "title": "Savage: New: Discbound Journal Bundle (Standard 6\"x 8.5\" Journal) $99.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$99.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-cardstock.jpg?v=1790020388",
        "link": "https://ugmonk.com/products/discbound-journal-bundle-standard-6x-8-5-journal?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 9355,
        "title": "Insane: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 6718,
        "title": "Elite: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5470,
        "title": "Elite: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1735,
        "title": "Viral: Target Circle Bonus Coupon Offer: Halloween Candy & Snack Purchases Extra 20% Off + Free Pickup",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "Check Deal",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.target.com/p/reese-39...A-85941086?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9094,
        "title": "Elite: 15-Pk VOLLYC Travel Vacuum Bags w/ Rechargeable Air Pump $11.40 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$11.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G8JD2FCB?th=1&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6516,
        "title": "Unbeatable: 12\" x 8\" Fibogollo Bamboo End Grain Butcher Block Cutting Board $8 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$8",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F5PV7P2G?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5655,
        "title": "Epic: New: Discbound Heirloom Journal Bundle (Black Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-blk.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-black-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "HOT"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];