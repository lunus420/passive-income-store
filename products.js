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
        "id": 4703,
        "title": "Viral: Prime Members: 5-lbs Sports Research Whey Protein Isolate Powder (Creamy Vanilla) $53.50 w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$53.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F8LFDHG6?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9677,
        "title": "Brutal: New: Analog - Today Cards $13.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$13.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-card.jpg?v=1790177479",
        "link": "https://ugmonk.com/products/analog-today-cards-1-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9142,
        "title": "Epic: New: Discbound Journal Bundle (Standard 6\"x 8.5\" Journal) $99.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$99.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-cardstock.jpg?v=1790020388",
        "link": "https://ugmonk.com/products/discbound-journal-bundle-standard-6x-8-5-journal?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2435,
        "title": "Savage: Prime Members: 20,000mAh Baseus 4-Port 145W Power Bank w/ 100W Retractable USB-C $30 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0FPVX7DQR?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4949,
        "title": "Premium: New: Analog - Today Cards (3-Pack) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-new2_ff126a76-c2f8-43b3-b120-3cbffb9d01ea.jpg?v=1773953342",
        "link": "https://ugmonk.com/products/analog-today-cards-3-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5367,
        "title": "Must-Have: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1617,
        "title": "Exclusive: Prime Members: Corelle Vitrelle 18-Pc Dinnerware Set (Winter Frost White) $35 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B00R790CLY?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 2984,
        "title": "Premium: Prime Members: 55\" Roku 55RAD5 Pro Series 4K OLED 120Hz Smart TV (2026) $700 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$700",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GVW1M8JF?th=1&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4682,
        "title": "Viral: Prime Members: 100-Ct Finish Quantum Dishwasher Pods $14.70 w/ S&S + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$14.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/Finish-Dis...1_2_sspa?c&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4826,
        "title": "Unbeatable: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6645,
        "title": "Elite: Prime Members: 14mm or 16mm Nightblade Raw Carbon Fiber Pickleball Paddle $35.25 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$35.25",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F7X6QWDR?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1323,
        "title": "Exclusive: Prime Members: GTPLAYER Ergonomic Swivel Rocker Gaming Chair w/ Footrest (red) $64 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals Toys",
        "price": "$64",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DS3VDN5Z?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 5212,
        "title": "Insane: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1854,
        "title": "Extreme: Prime Members: Letsmeet Plush Dog Toys w/ Squeaker (Dog, Octopus or Elephant) $5 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0CXY1P899?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 9241,
        "title": "Savage: Fanttik Slim V8 Apex 4-in-1 Cordless Car Vacuum (4 Colors) $46 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$46",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CQYTN?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2441,
        "title": "Epic: Refurb: Sony WH-1000XM5 Wireless Noise Canceling Headphones $128 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$128",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.ebay.com/itm/31884910...media=COPY?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "VIRAL"
    },
    {
        "id": 8710,
        "title": "Elite: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 6959,
        "title": "Elite: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 7334,
        "title": "Unbeatable: New: Analog Archive (Silver Aluminum) $129.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$129.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/aluminum-archive-silver-1.jpg?v=1791302272",
        "link": "https://ugmonk.com/products/analog-archive-silver-aluminum?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2780,
        "title": "Elite: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2997,
        "title": "Viral: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6891,
        "title": "Insane: Prime Members: McDavid Hex Padded Knee Compression Leg Sleeves (Pair) from $10.70 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$10.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B007RQ3B38?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 7239,
        "title": "Savage: 4-Pk Monster Multi-Color Outdoor Smart Flood Lights $40 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GVD9Y8WP?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1098,
        "title": "Savage: New: Analog Archive (Black Aluminum) $129.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$129.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/aluminum-archive-blk-1.jpg?v=1791302272",
        "link": "https://ugmonk.com/products/analog-archive-black-aluminum?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 9386,
        "title": "Must-Have: Dungeon Crawler Carl Series Hardcover Books (various) Buy 2, Get 1 Free + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "Check Deal",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/0316573?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4011,
        "title": "Extreme: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 3458,
        "title": "Must-Have: Prime Members: 8-Oz Hawaiian Tropic Sheer Touch SPF 30 Lotion Sunscreen $3.80 w/ S&S + Free S&H",
        "category": "Beauty & Health",
        "source": "Slickdeals",
        "price": "$3.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.amazon.com/dp/B0031O5?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2131,
        "title": "Exclusive: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5540,
        "title": "Savage: Prime Members: 2.2-lb Lavazza Espresso Whole Bean Coffee (Medium Roast) $13.50 w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$13.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Lavazza-Es..._sspa?crid&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7137,
        "title": "Premium: 267-Pc LEGO Speed Champions Mercedes-AMG F1 W15 Race Car Building Toy $16.20 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$16.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DHLHMK9V?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 7790,
        "title": "Legendary: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 3331,
        "title": "Savage: Prime Members: 2-Pk 2.2-Lb Lavazza Crema e Aroma Whole Bean Coffee (Dark Roast) $24.30 w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$24.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B018HFA?tag=bigterry20036-20",
        "badge": "HOT"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];