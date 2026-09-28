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
        "id": 9861,
        "title": "Extreme: Metallica: The Black Album Remastered (Audio CD w/ AutoRip MP3) $5 ",
        "category": "Toys & Fun",
        "source": "Slickdeals",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B097CFN5W4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6412,
        "title": "Viral: New: Discbound Heirloom Journal Bundle (Black Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Toys & Fun",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-blk.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-black-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 8329,
        "title": "Brutal: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Home",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 9966,
        "title": "Elite: New: Discbound Heirloom Journal Bundle (Tan Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Toys & Fun",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-tan.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-tan-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9630,
        "title": "Must-Have: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 8354,
        "title": "Epic: Select Accounts: 5-Pk 0.625-Oz Jack Link's Beef Jerky (Original) $2.90 w/ S&S",
        "category": "Food",
        "source": "FatWallet",
        "price": "$2.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07NR7694X?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9536,
        "title": "Must-Have: The Crow (Blu-ray + Digital) $6.95 ",
        "category": "Toys & Fun",
        "source": "FatWallet",
        "price": "$6.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Crow-Blu-r...219&amp;sr=8-2?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 8276,
        "title": "Viral: 16\" MSI Crosshair Laptop: QHD+ 240Hz, i7-14650HX, RTX 5070, 16GB DDR5, 512GB SSD $1299 + Free S&H",
        "category": "Electronics",
        "source": "Slickdeals Toys",
        "price": "$1299",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.walmart.com/ip/205729...2A4A9C2EF9?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 5195,
        "title": "Unbeatable: Select Accts: 120-Ct Bestpresso for Nespresso Original Coffee Pods (Variety Pack) $21.45 w/ S&S + Free S&H",
        "category": "Food",
        "source": "FatWallet",
        "price": "$21.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B01EIA2YXI?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7071,
        "title": "Epic: New: MW50+ $299.00",
        "category": "Electronics",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 1055,
        "title": "Unbeatable: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Home",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3489,
        "title": "Exclusive: New: Analog - Today Cards $13.00",
        "category": "Toys & Fun",
        "source": "Ugmonk",
        "price": "$13.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-card.jpg?v=1790177479",
        "link": "https://ugmonk.com/products/analog-today-cards-1-pack?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 2816,
        "title": "Legendary: Used Like New: Logitech G923 Racing Wheel w/ Pedals (PS4, PS5, PC) $164.35 + Free S&H",
        "category": "Electronics",
        "source": "FatWallet",
        "price": "$164.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B07PFB7?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 7593,
        "title": "Premium: New: MW09 TUMI $450.00",
        "category": "Electronics",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 1224,
        "title": "Savage: Etunsia 35dB Oscillating Misting Standing Fan w/ 3 Misting Modes & 9 Speeds $60 + Free S&H",
        "category": "Home",
        "source": "FatWallet",
        "price": "$60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Etunsia-Mi...3D%3D&amp;th=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7719,
        "title": "Viral: Milwaukee M12 12V 3/8\" Cordless Ratchet w/ 2x 5.0 Ah Batteries & Charger $199 + Free S&H",
        "category": "Electronics",
        "source": "Slickdeals",
        "price": "$199",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.homedepot.com/p/Milwa.../342964797?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 6836,
        "title": "Exclusive: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Home",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4538,
        "title": "Epic: Toughergun Men's Slim RFID-Blocking Wallet w/ Money Clip $5 ",
        "category": "Fashion",
        "source": "Slickdeals Food",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B073D2J5ZS?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 2822,
        "title": "Extreme: 24-Ct ZMLM 5.5\" x 4\" Rainbow Scratch Notebook w/ Stencil & Wooden Stylus (Party) $13.50 ",
        "category": "Home",
        "source": "Slickdeals",
        "price": "$13.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CF22HNYV?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2637,
        "title": "Legendary: New: MH40 Wired $299.00",
        "category": "Electronics",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 8999,
        "title": "Premium: 2-Pk 5' MPATIBY 2x USB-C, 1x Lightning + 1x Micro USB to USB-C + A Charging Cables $7.50 ",
        "category": "Home",
        "source": "Slickdeals",
        "price": "$7.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F8Q65NRD?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2909,
        "title": "Extreme: 1/2\" x 100' Ayura Retractable Garden Hose Reel $64 + Free S&H",
        "category": "Home",
        "source": "Slickdeals",
        "price": "$64",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GVS1C?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 6339,
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
        "id": 3009,
        "title": "Brutal: Sicario (Blu-ray + DVD) $5 ",
        "category": "Toys & Fun",
        "source": "FatWallet",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Sicario-Bl...202&amp;sr=8-1?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 2834,
        "title": "Must-Have: 12\" x 8\" Fibogollo Bamboo End Grain Butcher Block Cutting Board $8 ",
        "category": "Home",
        "source": "Slickdeals Food",
        "price": "$8",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F5PV7P2G?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2667,
        "title": "Legendary: Prime Members: SOLIOM 5MP Window Camera w/ LCD Touchscreen $29.40 + Free S&H",
        "category": "Electronics",
        "source": "Slickdeals",
        "price": "$29.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H2LYC9TN?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6123,
        "title": "Elite: New: Discbound Journal Bundle (Standard 6\"x 8.5\" Journal) $99.00",
        "category": "Toys & Fun",
        "source": "Ugmonk",
        "price": "$99.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-cardstock.jpg?v=1790020388",
        "link": "https://ugmonk.com/products/discbound-journal-bundle-standard-6x-8-5-journal?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 8103,
        "title": "Insane: 512-Pc LEGO Super Mario: Mario Kart Wario & King Boo Building Set $24.75 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$24.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.ebay.com/itm/18893985...3AFeatured?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "HOT"
    },
    {
        "id": 2150,
        "title": "Epic: New: MW75 TUMI $750.00",
        "category": "Electronics",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 6782,
        "title": "Epic: KODA Multi-Directional LED Work Light w/ 120V Outlet & USB Charging (2500 Lumens) $19.80 + Free S&H",
        "category": "Home",
        "source": "Slickdeals",
        "price": "$19.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.homedepot.com/p/KODA-.../325906821?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8258,
        "title": "Exclusive: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Home",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 5884,
        "title": "Legendary: New: Analog - Today Cards (3-Pack) $30.00",
        "category": "Toys & Fun",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-new2_ff126a76-c2f8-43b3-b120-3cbffb9d01ea.jpg?v=1773953342",
        "link": "https://ugmonk.com/products/analog-today-cards-3-pack?ref=moment_partner_2026",
        "badge": "VIRAL"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];