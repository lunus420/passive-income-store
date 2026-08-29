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
        "id": 7367,
        "title": "Epic: Wet Brush Shine Enhancer Palm Boar Bristle Hair & Beard Brush $6.75 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$6.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CYHG8CS2?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9196,
        "title": "Insane: 12-Month Microsoft Xbox Game Pass Essential Subscription (Email Delivery) $65 or Less ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$65",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.newegg.com/microsoft/...6888351003?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3769,
        "title": "Extreme: 668-Pc LEGO Friends Fun Indoor Playground Building Toy $33 ",
        "category": "Toys & Fun",
        "source": "FatWallet",
        "price": "$33",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FMS5W9HT?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2027,
        "title": "Exclusive: 2-Pc 4' 6\" Lew's IM6 Graphite Blank Crappie Thunder Spincast Rod And Reel Combo $32.05 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$32.05",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0B6JSFYRD?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 1851,
        "title": "Legendary: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 2448,
        "title": "Premium: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 3154,
        "title": "Extreme: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-green?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 9730,
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
        "id": 7016,
        "title": "Viral: 0.94\" Scotch Heavy Duty Masking Tape (Orange) $1.90 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$1.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B08NRV1GRJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4185,
        "title": "Elite: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 1637,
        "title": "Epic: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 8116,
        "title": "Legendary: 828-Pc LEGO Wednesday Thing's Apartment Building Set $54 + Free S/H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$54",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DX3ZYFPB?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9165,
        "title": "Unbeatable: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 7896,
        "title": "Premium: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 5597,
        "title": "Insane: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9889,
        "title": "Legendary: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3301,
        "title": "Exclusive: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4608,
        "title": "Exclusive: 32\u2033 Samsung Odyssey G5 G50F QHD 1440p 180Hz Gaming Monitor $199 + Free S/H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$199",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0G1DZM5QW?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 1714,
        "title": "Legendary: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1617,
        "title": "Premium: 3-Pk 12.5-Oz MRS. MEYER'S CLEAN DAY Liquid Hand Soap (Geranium) $8.65 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$8.65",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B00MH8ZRQ0?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2940,
        "title": "Legendary: Prime Members: WSRYYCC Handheld 1500W Portable Steam Cleaner (2 Colors) $50 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FR4NZN55?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3954,
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
        "id": 6261,
        "title": "Viral: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9010,
        "title": "Insane: Prime Members: 15.5-Oz Amazon Grocery Canned Dark Red Kidney Beans 4 for $2.70 w/ S&S & More + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$2.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fre..._1_3?crid=&tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 6817,
        "title": "Exclusive: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 2932,
        "title": "Savage: Prime Members in Select Locations: 1-Lb Amazon Grocery Ground Beef (80/20) $2 + Free S&H on $25+",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$2",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B08LJVQ...5Lls6uIyOG?tag=bigterry20036-20",
        "badge": "SALE"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];