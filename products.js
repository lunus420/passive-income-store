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
        "id": 3760,
        "title": "Legendary: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5601,
        "title": "Must-Have: New: Analog Starter Kit - BOGO Special $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/bogo.jpg?v=1788887383",
        "link": "https://ugmonk.com/products/analog-starter-kit-bogo-special?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 9430,
        "title": "Must-Have: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 3313,
        "title": "Exclusive: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 6837,
        "title": "Legendary: New: Analog Starter Kit (Silver 5-pack) $125.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-silver-1-tags2.jpg?v=1788890064",
        "link": "https://ugmonk.com/products/analog-starter-kit-silver-5-pack?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 9943,
        "title": "Insane: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 1398,
        "title": "Premium: New: Analog Starter Kit (Silver 3-pack) $79.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$79.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-silver-1-tags2.jpg?v=1788890064",
        "link": "https://ugmonk.com/products/analog-starter-kit-silver-3-pack?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 7657,
        "title": "Legendary: 4-Pc GEARWRENCH Bolt Biter Screw Extraction Set $16.95 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$16.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GR6Y8?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 2739,
        "title": "Viral: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 1361,
        "title": "Exclusive: Genuine Dickies Men's Insulated Duck Canvas Jacket (2 Colors) from $26 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$26",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.walmart.com/ip/Genuin...487662253?&ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 4515,
        "title": "Epic: 2-Pk 200-Ct Sugar In The Raw Turbinado Cane Sugar Packets $8.35 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$8.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07KCBTN7K?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 6929,
        "title": "Unbeatable: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 5101,
        "title": "Legendary: 265-Pc GOTOUR All-in-One Fishing Tackle Kit $14.50 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$14.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CC2HX2W8?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 3642,
        "title": "Premium: Booms Fishing 6-Piece Fishing Tools Kit (Gray or Green) $17 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$17",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0C3CDFV2X?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8267,
        "title": "Brutal: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6590,
        "title": "Unbeatable: CONODO 32GB Bluetooth 5.3 MP3 Player w/ 1.8\" Screen, FM Radio $17 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$17",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HFRNX729?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 7428,
        "title": "Legendary: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9391,
        "title": "Savage: New: Analog Starter Kit (Black 5-Pack) $125.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-black-1-tags.jpg?v=1788890120",
        "link": "https://ugmonk.com/products/analog-starter-kit-black-5-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2110,
        "title": "Premium: 8-Ct Energizer Ultimate Lithium AA Batteries $11.40 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$11.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B00EAKP8S0?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 8660,
        "title": "Legendary: Select Accts: 28-Oz Cameron's Coffee Dark Chocolate Mocha Roasted Ground Coffee $10.10 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$10.10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Camerons-C...1_8?crid=2&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 2452,
        "title": "Must-Have: Thermaltake GF1 850W Fully Modular 80 Plus Gold ATX Power Supply $79.95 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$79.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0C7TRJGL5?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 9870,
        "title": "Elite: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 6822,
        "title": "Exclusive: Hardaddy Men's Ribbed Knit Long Sleeve Polo V Neck Sweater (various colors) $9 ",
        "category": "Fashion",
        "source": "Slickdeals Food",
        "price": "$9",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0D66H2HKP?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8462,
        "title": "Legendary: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 7418,
        "title": "Premium: 6.5\" ULG Professional Hair Cutting Scissors (Blue) $6.75 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$6.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B071CWXLY5?th=&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4712,
        "title": "Legendary: Apasiri Tough Nylon Dog Chew Toy w/ Textured Rubber Center (Red/Beef Flavored) $6 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B08F5G6CGN?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 5397,
        "title": "Epic: New: Analog Starter Kit (Black 3-Pack) $79.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$79.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-black-1-tags.jpg?v=1788890120",
        "link": "https://ugmonk.com/products/analog-starter-kit-black-3-pack?ref=moment_partner_2026",
        "badge": "VIRAL"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];