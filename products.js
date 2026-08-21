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
        "id": 8405,
        "title": "Unbeatable: 42-Ct Arm & Hammer + OxiClean Odor Blasters Laundry Detergent Paks (Fresh Burst) $5.70 w/ S&S",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$5.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B07VH667FV?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 2003,
        "title": "Legendary: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1926,
        "title": "Must-Have: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7821,
        "title": "Savage: 2-Pk Tovolo Cat Ice Cube Mold $6 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B082BH6VNJ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 8174,
        "title": "Extreme: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8936,
        "title": "Must-Have: Apollo 13 (Blu-ray + Digital) $6 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Apollo-13-...253&amp;sr=8-1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9153,
        "title": "Exclusive: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 1367,
        "title": "Elite: GTPLAYER Sim Racing Wheel Stand Simulator w/ Shifter Mount $55 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$55",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FP9KCM6N?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 9725,
        "title": "Savage: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 5530,
        "title": "Exclusive: 5.3\" Dragon Ball Z Awakened Blood Super Saiyan Vegeta Figure $25 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$25",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BMT6N5S5?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5504,
        "title": "Must-Have: 6-Pk 4-Oz Beyond Meat Beyond Burger Plant-Based Patties + $6.75 Walmart Cash $13.50 + Free Pickup",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$6.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/Beyond...om=/search?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7586,
        "title": "Savage: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 5230,
        "title": "Brutal: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5268,
        "title": "Epic: Razer 14-Port USB 4 Dock Station: USB-C, HDMI, DP, Dual Monitor & More (Black) $130 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$130",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DKB3GQBM?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5867,
        "title": "Elite: 27\" LG UltraGear OLED QHD 1440p 480Hz Gaming Monitor $468 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$468",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DMPTN8DG?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 3438,
        "title": "Brutal: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 6671,
        "title": "Must-Have: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 7409,
        "title": "Viral: Select Costco Locations: 2.2-Lbs. Lavazza Caffe Espresso Whole Bean Coffee $12 (Pricing/Availability May Vary)",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$12",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.costco.com/p/-/lavazz.../100381544?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8893,
        "title": "Insane: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 3837,
        "title": "Savage: Shaun of the Dead (4K UHD + Blu-ray + Digital) $17 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$17",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/Shaun-Dead...0DGGZDHCV/?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3697,
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
        "id": 1567,
        "title": "Brutal: Yes4All 3-Leg Weight Plate & Barbell Storage Rack w/ 6 Pegs $36.05 or less + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$36.05",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DH4MJ757?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 9346,
        "title": "Insane: 13.5\" Women's Natural Canvas Tote Bag (Bluey, Harry Potter, SpongeBob & More) $5 each & More",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/Harry-...7616408199?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 2655,
        "title": "Brutal: 2-pk House Again Extra Fine Mesh Tea Infuser Ball w/ Drip Tray (various) $6.50 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$6.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CRD7X?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8138,
        "title": "Epic: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-amber-copy?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2677,
        "title": "Insane: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3734,
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
        "id": 9144,
        "title": "Savage: Select Accounts: 17.63-Oz Stardrops The Pink Stuff Cleaning Paste $3 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$3",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...0DER&amp;psc=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5999,
        "title": "Premium: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];