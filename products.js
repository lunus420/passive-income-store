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
        "id": 5364,
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
        "id": 5997,
        "title": "Brutal: Prime Members Pre-order: 3-Pk 12-Oz Amazon Fresh Whole Bean Coffee (Just Bright) $10.50 + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$10.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/AmazonFres...Z?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4822,
        "title": "Unbeatable: New: Discbound Heirloom Journal Bundle (Black Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-blk.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-black-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3014,
        "title": "Epic: 12-ct KUCHEY Colored Rainbow Pencils $3.50 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$3.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0D3DZHB6Q?th=1&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1085,
        "title": "Insane: 14.4-oz Amazon Saver Graham Crackers $1.85, 12-oz Amazon Saver Oatmeal Cookies $1.55 & More w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$1.85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Bra...=8-27&amp;th=1?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 1259,
        "title": "Must-Have: 15-Pk 2.5-Oz Planters Salted Peanuts $5.95 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$5.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/PLANTERS-P...1_25?crid=&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3917,
        "title": "Insane: Select Areas: 12-Pk 12-Oz Mountain Dew Zero Sugar Soda 3 for $11.15 ",
        "category": "Food & Grocery",
        "source": "Slickdeals",
        "price": "$11.15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B081FXX...X0DER&amp;th=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4424,
        "title": "Exclusive: 34\" Acer Nitro ED0 3440x1440 120Hz 1ms FreeSync Curved Gaming Monitor $189 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$189",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.walmart.com/ip/Acer-N...0004?class&ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 8184,
        "title": "Elite: Costco Members: 2-Pk Filtrete 4\" MPR 1550 MERV 12 Deep Pleat Air Filter $34 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$34",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.costco.com/p/-/filtre...?langId=-1&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 5625,
        "title": "Insane: 20.3oz PayDay Peanut Caramel Snack Size Halloween Candy (Jumbo Bag) $8 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$8",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.walmart.com/ip/Payday...irect=true?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 9083,
        "title": "Epic: Prime Members: Greater Than Games Spirit Island Cooperative Strategy Board Game $45 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B01MUHP51S?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6787,
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
        "id": 9128,
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
        "id": 2369,
        "title": "Elite: Prime Members: 24-Ct Happy Belly Dark Roast Coffee Pods (French Roast) $4.90 or Less w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$4.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B07NZTX69L?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 6720,
        "title": "Exclusive: New: Analog - Today Cards (3-Pack) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-new2_ff126a76-c2f8-43b3-b120-3cbffb9d01ea.jpg?v=1773953342",
        "link": "https://ugmonk.com/products/analog-today-cards-3-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8558,
        "title": "Viral: 4-Port wegear 140W GaN USB-C Wall Charger w/ Touch Smart Display & 5' 240W Cable $33 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$33",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0H14NRQ35?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 8031,
        "title": "Epic: New: Discbound Heirloom Journal Bundle (Tan Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-tan.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-tan-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 6398,
        "title": "Epic: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5560,
        "title": "Epic: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 8276,
        "title": "Insane: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 5547,
        "title": "Premium: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1094,
        "title": "Viral: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7816,
        "title": "Must-Have: Gourmia 1.7L Glass Electric Digital Display Kettle w/ Removable Tea Infuser $17.90 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$17.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G35RD?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 3479,
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
        "id": 3652,
        "title": "Savage: New: Discbound Journal Bundle (Standard 6\"x 8.5\" Journal) $99.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$99.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-cardstock.jpg?v=1790020388",
        "link": "https://ugmonk.com/products/discbound-journal-bundle-standard-6x-8-5-journal?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 6283,
        "title": "Epic: 11.3-Oz OEAGO Floral Glass Tea Mug w/ 3D Rose Design, Butterfly & Enamel Spoon $5 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product...XJD6?th=1a&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5241,
        "title": "Viral: New: Analog - Today Cards $13.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$13.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-card.jpg?v=1790177479",
        "link": "https://ugmonk.com/products/analog-today-cards-1-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6168,
        "title": "Must-Have: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 4873,
        "title": "Premium: Select Accts: 120-Ct Bestpresso for Nespresso Original Coffee Pods (Variety Pack) $21.45 w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$21.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B01EIA2YXI?tag=bigterry20036-20",
        "badge": "TOP PICK"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];