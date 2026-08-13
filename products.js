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
        "id": 5200,
        "title": "Insane: 3-Pk DeWALT 3\" Bonded Cutting Wheels $7.30 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$7.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0B9ZXRVGD?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 9897,
        "title": "Epic: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2324,
        "title": "Unbeatable: DeWALT 15 Amp Corded 12\" Double Bevel Compound Miter Saw (DWS779) $353.70 + Free S&H",
        "category": "Home & Kitchen",
        "source": "FatWallet",
        "price": "$353.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.homedepot.com/p/DEWAL.../321488482?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 6332,
        "title": "Viral: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 6990,
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
        "id": 1754,
        "title": "Legendary: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-amber-copy?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4232,
        "title": "Exclusive: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4151,
        "title": "Extreme: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3968,
        "title": "Legendary: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 5864,
        "title": "Viral: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5281,
        "title": "Savage: Ryobi One+ 18V 1/2\" x 18\" File Sander w/ 2x 4Ah + 1x 2Ah Battery & Charger $168.35 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$168.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.homedepot.com/p/RYOBI.../328814879?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4437,
        "title": "Unbeatable: 27\" Acer Nitro 1080p 200Hz IPS FreeSync Premium Gaming Monitor $106 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$106",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.ebay.com/itm/197449122866?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "NEW"
    },
    {
        "id": 5625,
        "title": "Must-Have: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4564,
        "title": "Premium: Select Accounts: 30-Oz Harry's Men's Body Wash (Various Scents) 4 for $30.75 w/ S&S + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$30.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F8KRNB49?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 5574,
        "title": "Exclusive: acer HDMI Switch 5-in-1 Out 4K@60Hz w/ Remote $20 + Free S&H w/ Prime",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://electronics.woot.com/offe...nt_wp_0_22?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7395,
        "title": "Savage: 13.5-Oz Nanoskin 99.9% Isopropyl Alcohol for Industrial & Laboratory Use $5.60 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$5.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F94KV22V?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2993,
        "title": "Elite: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 2120,
        "title": "Extreme: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6227,
        "title": "Insane: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7536,
        "title": "Extreme: DeWALT XTREME 12V Max Variable Speed Brushless 3/8\" Ratchet (Tool Only) $99 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$99",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.lowes.com/pd/DEWALT-D...5013118759?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 5850,
        "title": "Viral: 6oz. Amazon Grocery Stuffing Mix (Turkey Flavor) $0.90 or Less w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$0.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fresh-Turkey-Flavored-Stuffing/dp/B09SHMWMF4/ref=pd_cart_crc_cko_cp_d_?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7796,
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
        "id": 1729,
        "title": "Savage: 20000mAh Baseus 100W Power Bank w/ Built-in USB-C Dual Cables $33.30 & More + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$33.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FP26DDJB?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4948,
        "title": "Extreme: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 6377,
        "title": "Unbeatable: New: Analog Card Sleeve Multipack - Large (Set of 18) $35.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$35.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];