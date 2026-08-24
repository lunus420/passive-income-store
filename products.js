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
        "id": 7810,
        "title": "Elite: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 2631,
        "title": "Premium: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 4049,
        "title": "Elite: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 1584,
        "title": "Viral: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 4475,
        "title": "Epic: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 7744,
        "title": "Must-Have: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 5583,
        "title": "Insane: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6923,
        "title": "Elite: 194-Pc LEGO City Burger Truck Building Set $12.80 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Food",
        "price": "$12.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CGY4LZQ3?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2520,
        "title": "Legendary: 12-Ct 1.98-Oz ALOHA Organic Plant-Based Protein Bars (6 Flavor Variety Pack) $12.95 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$12.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B08FC3RZKZ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4253,
        "title": "Premium: WEIZE 10x10 Pop Up Adjustable Height 1-Sidewall Canopy Tent w/ 1-Button Setup $90 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/WEIZE-1-Bu...3D%3D&amp;th=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9777,
        "title": "Exclusive: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 9630,
        "title": "Epic: Beelicious Pro VacSense 75kPa Handheld Vacuum Sealer + 30 Reusable Bags $19.50 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$19.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GKFT114W?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4059,
        "title": "Unbeatable: 72-Ct 3.9-Oz Mott's Applesauce Cups (No Sugar Added) $14.35 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$14.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...UOO1Y/?fpl&tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 7086,
        "title": "Legendary: 20-Yard Duck Color Duct Tape (1.88\", Various) $3.50 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$3.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B002TOL45U?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2241,
        "title": "Elite: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4999,
        "title": "Brutal: 16-Oz Planters Dry Roasted Peanuts (Salted) $2.35 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$2.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B000PWIQW2?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3113,
        "title": "Epic: Acer Ergonomic 2.4GHz 1600DPI Wireless Mouse w/ Receiver (Black) $10 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product...g_1?creati&tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 9856,
        "title": "Viral: 90-Ct Optimum Nutrition Opti-Men Daily Multivitamin Supplement $15.70 ",
        "category": "Food & Grocery",
        "source": "FatWallet",
        "price": "$15.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0015R3A7M?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 6305,
        "title": "Elite: 12-Pk 14.5-Oz Barilla Protein+ Penne Pasta $2.70 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals",
        "price": "$2.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B001A5RQ9C?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9140,
        "title": "Epic: WORKPRO 700W 2900PSI Airless Paint Sprayer $144 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$144",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FNMTCS6W?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8774,
        "title": "Insane: Select Locations: 65\" Hisense U6 Pro Mini\u2011LED ULED 4K 144Hz Dolby Vision IQ TV $599 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$599",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GT8GLWZH?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 5136,
        "title": "Elite: 27\" LG 27GX700A-B Ultragear 2560x1440 280Hz OLED G-Sync Monitor $382.75 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$382.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0FLLNVXFG?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1885,
        "title": "Legendary: Select Accts: 12-ct Gillette 5 Men's 5-Blade Razor Blade Refills $20.90 w/ S&S",
        "category": "Beauty & Health",
        "source": "Slickdeals",
        "price": "$20.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.amazon.com/dp/B07D64B9RL?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8601,
        "title": "Insane: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-amber-copy?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 8281,
        "title": "Premium: 384-Pc LEGO City Red Double-Decker Sightseeing Bus Toy Vehicle Set $19.20 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$19.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CV2GC6PC?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 9122,
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
        "id": 4204,
        "title": "Insane: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 6924,
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
        "id": 8667,
        "title": "Legendary: 403-Pc LEGO City Emergency Air Ambulance Airplane Building Toy $34.80 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$34.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DRW6K64Q?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7075,
        "title": "Exclusive: 4-Pack 24oz Lysol Toilet Bowl Cleaner Clinging Gel $7.05 w/ S&S",
        "category": "Home & Kitchen",
        "source": "FatWallet",
        "price": "$7.05",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H5CH8VRQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6233,
        "title": "Insane: MIXXIDEA Squirrel Feeder Picnic Table w/ Umbrella $9.35 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$9.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B08T14DSGX?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8908,
        "title": "Premium: adidas men Terrex Anylander Mid Rain.Rdy Hiking Shoes (cardboard) $38.50 + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$38.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ea27babaf_generated_image.png",
        "link": "https://www.ebay.com/itm/157696632410?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "NEW"
    },
    {
        "id": 9770,
        "title": "Brutal: 4-Pk TOURIT Reusable Ice Packs (Large) $6.50 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$6.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07TWTR3K8?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2510,
        "title": "Unbeatable: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7298,
        "title": "Exclusive: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3355,
        "title": "Exclusive: SIXZOONM 15' Plug-In Pendant Light Cord w/ E26 Socket & On/Off Switch (White) $5.50 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$5.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07141NVQ3?tag=bigterry20036-20",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];