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
        "id": 5889,
        "title": "Exclusive: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 2821,
        "title": "Extreme: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 7977,
        "title": "Savage: Starrey Drip Irrigation Garden Watering System: 91' $15.40, 126' $20.30 & More",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$15.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G9F2W8RP?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2151,
        "title": "Must-Have: 194-Pc LEGO City Burger Truck Building Set $12.80 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Food",
        "price": "$12.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CGY4LZQ3?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8354,
        "title": "Savage: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3509,
        "title": "Extreme: 16-Oz Planters Dry Roasted Peanuts (Salted) $2.35 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$2.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B000PWIQW2?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 7563,
        "title": "Insane: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1136,
        "title": "Elite: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 7923,
        "title": "Viral: 47\" U-Shape Cucumber Trellis w/ Net $18.50 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$18.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G6KQRQNF?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 4898,
        "title": "Viral: OLIGHT Oclip Ultra 530-Lumen EDC Flashlight w/ Spotlight & 365nm UV (Olive Green) $30 ",
        "category": "Home & Kitchen",
        "source": "FatWallet",
        "price": "$30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/OLIGHT-Fla...0DTG49MBC/?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7443,
        "title": "Unbeatable: 12-Ct 1.98-Oz ALOHA Organic Plant-Based Protein Bars (6 Flavor Variety Pack) $12.95 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$12.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B08FC3RZKZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2002,
        "title": "Exclusive: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8153,
        "title": "Must-Have: 3-Pk Kaliyadi Men's Polarized UV400 Rectangle Sunglasses (various) from $10.20 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$10.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GVZ3W?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 5690,
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
        "id": 1621,
        "title": "Unbeatable: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-green?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 9015,
        "title": "Insane: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 4949,
        "title": "Must-Have: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4481,
        "title": "Viral: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4132,
        "title": "Elite: 4-Pk TOURIT Reusable Ice Packs (Large) $6.50 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$6.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07TWTR3K8?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 3978,
        "title": "Premium: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 3228,
        "title": "Elite: 8BitDo Retro 87-Key Mechanical Keyboard w/ Bluetooth, 2.4GHz & USB-C (N Edition) $51 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$51",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://amazon.com/dp/B0F37BTPPH?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3277,
        "title": "Viral: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 3766,
        "title": "Legendary: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4217,
        "title": "Insane: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 6435,
        "title": "Unbeatable: Expert Grill Grilling Accessories from $1 + Free Pickup",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$1",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/Expert-Grill-15inch-Stainless-Steel-Barbecue-Spatula-with-Detachable-Hand?ref=money_maker_2026",
        "badge": "HOT"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];