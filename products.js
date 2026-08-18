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
        "id": 7012,
        "title": "Insane: 12\" Victoria Day of the Dead La Calaca Cast Iron Skillet $21 + Free S&H on $39+",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$21",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07RS1TRJ5?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4869,
        "title": "Epic: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 4301,
        "title": "Brutal: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9665,
        "title": "Epic: Select Accounts: 17.63-Oz Stardrops The Pink Stuff Cleaning Paste $3 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$3",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...0DER&amp;psc=1?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 2416,
        "title": "Viral: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4984,
        "title": "Premium: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4797,
        "title": "Elite: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 4769,
        "title": "Insane: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 9284,
        "title": "Insane: Grepro 10000mAh Magnetic Portable Power Bank w/ 22.5W USB-C Cable (Black) $15 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FPCZB?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2303,
        "title": "Insane: Metallica: Ride The Lightning (180g Remastered Vinyl w/ AutoRip MP3 Album) $19.35 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$19.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B01BUX7Z7Q?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2353,
        "title": "Elite: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5377,
        "title": "Elite: 42-Ct Arm & Hammer + OxiClean Odor Blasters Laundry Detergent Paks (Fresh Burst) $5.70 w/ S&S",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$5.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B07VH667FV?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7049,
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
        "id": 8896,
        "title": "Exclusive: Final Fantasy VII: Rebirth Day One Edition (Switch 2 Game-Key Card) $35 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...mid=&amp;psc=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2779,
        "title": "Unbeatable: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-amber-copy?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4969,
        "title": "Unbeatable: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3236,
        "title": "Brutal: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 3804,
        "title": "Brutal: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 5374,
        "title": "Insane: Conair Grip & Style Hot Curling Brush $1.30 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$1.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B001ESJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9191,
        "title": "Savage: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7771,
        "title": "Extreme: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 9754,
        "title": "Must-Have: Used Like New: Sony WH-1000XM6 Wireless Noise-Cancelling Over-Ear Headphones $199 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$199",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F3PQHWTZ?th=1&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8402,
        "title": "Exclusive: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];