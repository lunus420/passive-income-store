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
        "id": 3480,
        "title": "Savage: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 5837,
        "title": "Insane: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5676,
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
        "id": 1277,
        "title": "Premium: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7601,
        "title": "Legendary: BAGSMART Magnetic Crossbody 40-oz Water Bottle Holder w/ Strap $10 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07DM35G7J?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3232,
        "title": "Insane: 6-Pk 4-Oz Beyond Meat Beyond Burger Plant-Based Patties + $6.75 Walmart Cash $13.50 + Free Pickup",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$6.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/Beyond...om=/search?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3367,
        "title": "Extreme: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 8400,
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
        "id": 6334,
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
        "id": 1146,
        "title": "Legendary: 42-Ct Arm & Hammer + OxiClean Odor Blasters Laundry Detergent Paks (Fresh Burst) $5.70 w/ S&S",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$5.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B07VH667FV?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1669,
        "title": "Exclusive: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 1026,
        "title": "Legendary: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-amber-copy?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 7262,
        "title": "Legendary: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 3770,
        "title": "Legendary: BORA Pro Compact Metal Pocket Hole Jig Kit w/ Auto-Adjusting Drill Guide $25 ",
        "category": "Home & Kitchen",
        "source": "FatWallet",
        "price": "$25",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GL3BT2HR?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 9442,
        "title": "Insane: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5606,
        "title": "Exclusive: KISS: Dynasty (Vinyl) $16 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$16",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B00HGFIJM8?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 8601,
        "title": "Exclusive: 4-Pk uniball 207 Plus+ Retractable Gel Pens (Medium Point, 0.7mm, Black) $4.05 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$4.05",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...mid=&amp;psc=1?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 2784,
        "title": "Brutal: AMD Ryzen 7 9800X3D + MSI B850 GAMING PLUS Board + Cooler Master AIO Cooler $461 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$461",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.newegg.com/Product/Co...bo.4881669?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 4848,
        "title": "Epic: 2-Pc SHOCKWAVE 2-In-1 Magnetic Nut Driver Set w/ 5-Pc Hex Bit Holder & Carabiner $18.50 + Free S/H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$18.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.homedepot.com/p/Milwa.../341760616?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8352,
        "title": "Exclusive: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 8851,
        "title": "Epic: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1226,
        "title": "Must-Have: Niagara Sleep Solution Ultra Soft & Cooling Mattress Topper (Queen) $37.90 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$37.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/a5a55d26e_generated_image.png",
        "link": "https://www.amazon.com/Viscose-Ba...B07D5DN269?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4467,
        "title": "Exclusive: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 8668,
        "title": "Brutal: Select Costco Locations: 2.2-Lbs. Lavazza Caffe Espresso Whole Bean Coffee $12 (Pricing/Availability May Vary)",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$12",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.costco.com/p/-/lavazz.../100381544?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 2199,
        "title": "Legendary: Select Accounts: 17.63-Oz Stardrops The Pink Stuff Cleaning Paste $3 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$3",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...0DER&amp;psc=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7011,
        "title": "Exclusive: 12-Pk 11-Oz PRIME Shakes 32g Protein Shake (Chocolate) $18.20 or less w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "FatWallet",
        "price": "$18.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G7MSWYF7?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 8189,
        "title": "Unbeatable: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];