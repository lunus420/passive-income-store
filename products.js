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
        "id": 7479,
        "title": "Brutal: Apasiri Tough Nylon Dog Chew Toy w/ Textured Rubber Center (Red/Beef Flavored) $6 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B08F5G6CGN?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1020,
        "title": "Unbeatable: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 1481,
        "title": "Premium: Prime: 24-Ct Happy Belly Dark Roast Keurig Coffee Pods (Dark Roast) 4 for $18.55 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$18.55",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B07P1Z6S39?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2418,
        "title": "Epic: New: Analog Starter Kit (Black 5-Pack) $125.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-black-1-tags.jpg?v=1788890120",
        "link": "https://ugmonk.com/products/analog-starter-kit-black-5-pack?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 1658,
        "title": "Savage: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 7014,
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
        "id": 4079,
        "title": "Epic: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 8439,
        "title": "Viral: Select Accts: 100-ct 6mil TitanFlexHeavy Duty Black Nitrile Gloves (large) 2 for $12.35 w/ S&S",
        "category": "Fashion",
        "source": "Slickdeals Food",
        "price": "$12.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CMZ5V?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2893,
        "title": "Premium: 3-Pk SECOOD Men's Polo Shirts $17 ",
        "category": "Fashion",
        "source": "FatWallet",
        "price": "$17",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DSFZHBKT?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8927,
        "title": "Unbeatable: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5497,
        "title": "Elite: GRACE KARIN Women's Long Sleeve Floral Maxi Fall Dress (3 Colors) $15 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H1C9S6KF?th=1&tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 5039,
        "title": "Extreme: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7279,
        "title": "Elite: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3267,
        "title": "Premium: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7017,
        "title": "Epic: MIXXIDEA Wooden Squirrel Picnic Table Feeder w/ Corn Holder, Water Bowl & Umbrella $13.20 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$13.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0D69VBQDN?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4999,
        "title": "Savage: Prime Members: 8\" WORKPRO Automotive Electrical Disconnect Pliers $10 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DBTXQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9292,
        "title": "Must-Have: New: Analog Starter Kit (Silver 5-pack) $125.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-silver-1-tags2.jpg?v=1788890064",
        "link": "https://ugmonk.com/products/analog-starter-kit-silver-5-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4145,
        "title": "Legendary: 12-Pk GIGALUMI Outdoor Solar-Powered Path Lights w/ Purple LED Bulbs $12.50 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$12.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H2XLJN3J?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6070,
        "title": "Extreme: Select Accts: 28-Oz Cameron's Coffee Dark Chocolate Mocha Roasted Ground Coffee $10.10 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$10.10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Camerons-C...1_8?crid=2&tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 9163,
        "title": "Must-Have: 500ml Costop 2-in-1 Glass Oil Sprayer $8 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$8",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DLN4LMNX?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6075,
        "title": "Premium: New: Analog Starter Kit - BOGO Special $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/bogo.jpg?v=1788887383",
        "link": "https://ugmonk.com/products/analog-starter-kit-bogo-special?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 7900,
        "title": "Viral: New: Analog Starter Kit (Silver 3-pack) $79.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$79.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-silver-1-tags2.jpg?v=1788890064",
        "link": "https://ugmonk.com/products/analog-starter-kit-silver-3-pack?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 9465,
        "title": "Unbeatable: New: Analog Starter Kit (Black 3-Pack) $79.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$79.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-black-1-tags.jpg?v=1788890120",
        "link": "https://ugmonk.com/products/analog-starter-kit-black-3-pack?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 6778,
        "title": "Extreme: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6338,
        "title": "Unbeatable: Van Halen: Live in New Haven CT, 1986 (Vinyl LP) $19.10 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$19.10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GXCD7RM7?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 1351,
        "title": "Premium: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "TOP PICK"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];