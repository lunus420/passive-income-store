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
        "id": 1256,
        "title": "Must-Have: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1209,
        "title": "Savage: LetsJoli Women's Water Drop Wireless Full Coverage Seamless Jelly Push-Up Bra from $8.50 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$8.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GWLX58K1?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 6067,
        "title": "Savage: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5564,
        "title": "Must-Have: SHINE WELL Air Compression Leg Massager w/ Heat $65 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$65",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09MYT6CZ1?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 9064,
        "title": "Exclusive: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-green?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8491,
        "title": "Extreme: TCL 85\" M8LF Series 4K UHD 144Hz HDR Mini LED Fire Smart TV (2026) $900 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$900",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/t...ku/6684129?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 7866,
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
        "id": 8854,
        "title": "Savage: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 5154,
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
        "id": 3756,
        "title": "Legendary: 24-ct HSHFAMIIY-US Halloween Make-A-Character Sticker Sheets $3.60 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$3.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F7Y5T78H?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 6536,
        "title": "Viral: 6-Cup Genuine Fred Nesting Mushroom Measuring Cups $7.45 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$7.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BT87J2JH?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8025,
        "title": "Unbeatable: 2-Ct 17.5-Oz Raid Ant & Roach Killer (Fragrance-Free) $6.20 w/ S&S",
        "category": "Beauty & Health",
        "source": "Slickdeals",
        "price": "$6.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.amazon.com/dp/B00NES7LMU?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 3350,
        "title": "Epic: 27\" Acer Nitro VG270K L1 4K UHD 72Hz / FHD 144Hz IPS Gaming Monitor $160 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$160",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GS3FHR7L?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 4687,
        "title": "Epic: Mattel Games UNO Junior Marvel Spidey & His Amazing Friends Card Game $6 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FZK1R3GR?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 6980,
        "title": "Savage: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2354,
        "title": "Exclusive: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 3685,
        "title": "Savage: Prime Members: 32-Oz Amazon Fresh Chicken or Beef Broth 4 for $4.05 + Free Shipping",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$4.05",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fre...f=sr_1_2?c&tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4741,
        "title": "Viral: Koalababy Baby Electric Nasal Aspirator w/ Soft Silicone Tips, Light & Music $15 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BRB9KKQ6?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8075,
        "title": "Savage: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8935,
        "title": "Savage: 16-Oz AXE Men's Body Wash w/ Essential Oils (Cool Ocean) 2 for $5.40 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$5.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/AXE-Ocean-...sr_1_1?cri&tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 2110,
        "title": "Viral: Select Accts: 3-Pk 50-Oz Seventh Generation Hand Dish Wash Refill (Free & Clear) $12 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$12",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Seventh-Ge...r=1-4&amp;th=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4620,
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
        "id": 1105,
        "title": "Savage: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9195,
        "title": "Viral: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9068,
        "title": "Elite: frawirshau Women's Overbust Costume Corset (black or white) from $11.35 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$11.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B08QFT62WF?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4479,
        "title": "Legendary: Prime Members: WSRYYCC Handheld 1500W Portable Steam Cleaner (2 Colors) $50 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FR4NZN55?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 7329,
        "title": "Insane: 4-ct SOLIOM Solar-Powered 4K Outdoor Wireless Security Camera Kit $172.10 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$172.10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FF9ZY5B3?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 3999,
        "title": "Extreme: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 1905,
        "title": "Must-Have: 2842-Pc LEGO Editions: FIFA World Cup Official Trophy Building Set $40 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FMYYG?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3311,
        "title": "Must-Have: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1357,
        "title": "Must-Have: 12.3-Oz Kashi GO Protein + Fiber Cereal (Original) $3.80 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$3.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0DT1JJ9H1?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 8517,
        "title": "Insane: PINSPARK Men's 1/4 Zip UPF 50+ Athletic Long Sleeve Pullover (Various Colors) $9 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$9",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H735P7S7?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2763,
        "title": "Insane: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "VIRAL"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];