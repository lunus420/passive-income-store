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
        "id": 2708,
        "title": "Brutal: Select Accts: 32-Oz Amazon Grocery Chicken Broth $0.95 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$0.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fre..._puis?th=1&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7371,
        "title": "Premium: WeLink 3-Port up to 100W USB C GaN PPS Wall Charger $15 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/WeLink-Cha...0FGNDLB51/?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9062,
        "title": "Extreme: New: Warehouse Item - Hightide Cooler Cargo Bag (Large - Black) $37.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$37.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/products/black-large-main-306860.jpg?v=1741627771",
        "link": "https://ugmonk.com/products/cooler-cargo-bag-black?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 4196,
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
        "id": 3613,
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
        "id": 4991,
        "title": "Must-Have: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 6743,
        "title": "Premium: 42-Ct Tide Pods Laundry Detergent Pacs (2 Scents) 4 for $32.15 + $15 Amazon Credit w/ S&S + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$32.15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0747ZC625?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 6388,
        "title": "Unbeatable: New: Warehouse Item - Craighill Jack Puzzle $49.00",
        "category": "Toys & Fun",
        "source": "Ugmonk",
        "price": "$49.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/jack-1-new.jpg?v=1751916485",
        "link": "https://ugmonk.com/products/warehouse-item-craighill-jack-puzzle?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4689,
        "title": "Epic: New: 15 Minute Hourglass (Amber) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/products/hourglass-4-234280.jpg?v=1753904765",
        "link": "https://ugmonk.com/products/15-minute-hourglass-amber?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5620,
        "title": "Extreme: New: 15 Minute Hourglass (Clear) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/products/hourglas-2-151991.jpg?v=1690906713",
        "link": "https://ugmonk.com/products/15-minute-hourglass-clear?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7447,
        "title": "Viral: 18V Makita LXT Brushless Cordless 4.5\" / 5\" X-LOCK Angle Grinder (Tool Only) $72 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$72",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.homedepot.com/p/Makit.../314975198?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 2090,
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
        "id": 7447,
        "title": "Unbeatable: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5432,
        "title": "Exclusive: 12-Ct BIC Gelocity Quick Dry 0.7mm Medium Retractable Clip Gel Pens (Blue) $4.90 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$4.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B01N7WCYUD?lv=shuf&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 5604,
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
        "id": 1310,
        "title": "Insane: Select Accounts: 100-Ct Centrum Silver Men 50+ Multivitamin Tablets $1.85 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$1.85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...X0DER&amp;th=1?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 5523,
        "title": "Brutal: Milwaukee M18 FUEL 18V Brushless 1/2\" Hammer Drill w/1/4\" Hex Impact Driver (Tool Only) $199 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$199",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.homedepot.com/p/Milwa.../328090914?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 9804,
        "title": "Brutal: Dell XPS 13 9345 Laptop: Snapdragon X Elite, 13.4\" 2K 120Hz, 32GB RAM, 512GB SSD $1000 or Less + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$1000",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.dell.com/en-us/shop/c...o9345qcm05?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1795,
        "title": "Insane: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1842,
        "title": "Exclusive: AMD Ryzen 7 7800X3D AM5 CPU + 750W Corsair CX750 80+ Bronze ATX Power Supply $339 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$339",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.newegg.com/amd-ryzen-...6819113793?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 4519,
        "title": "Brutal: Victorinox Swiss Army 1 Medium Pocket Knife w/ Alox Scales $20 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B08ZNFNM9J?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7036,
        "title": "Insane: 543-Pc LEGO Animal Crossing Blathers\u2019s Museum Collection Building Toy $52.40 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Food",
        "price": "$52.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DRW8G3VY?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4161,
        "title": "Exclusive: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8616,
        "title": "Extreme: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 1366,
        "title": "Unbeatable: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 4270,
        "title": "Epic: LISEN 67\" Phone Tripod/Selfie Stick w/ Auto-Deploy Base & Remote $17 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$17",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FRD6B?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 3015,
        "title": "Premium: 72 Can Odoland Leakproof Insulated Rolling Cooler Bag w/ Handle $27.20 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$27.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DQKK6JNV?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 6226,
        "title": "Epic: New: Gather Wood Zigzag Tray (2x1 - Walnut) $49.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$49.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/walnut-tan.jpg?v=1783442574",
        "link": "https://ugmonk.com/products/gather-zigzag-tray-walnut?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 2989,
        "title": "Exclusive: Prime Members: UGREEN Nexode Pro 160W Charger w/ Retractable Cable $100 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$100",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FYFDD1WW?tag=bigterry20036-20",
        "badge": "HOT"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];