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
        "id": 8112,
        "title": "Must-Have: 3-Pk 0.94\" x 60-Yds ScotchBlue Original Multi-Surface Painters Tape $8.40 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$8.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B089NYWHJ5?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4632,
        "title": "Savage: 543-Pc LEGO Animal Crossing Blathers\u2019s Museum Collection Building Toy $52.40 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Food",
        "price": "$52.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DRW8G3VY?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1838,
        "title": "Brutal: Select Accts: 32-Oz Amazon Grocery Chicken Broth $0.95 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$0.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fre..._puis?th=1&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 6911,
        "title": "Exclusive: New: Gather Wood Zigzag Tray (2x1 - Walnut) $49.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$49.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/walnut-tan.jpg?v=1783442574",
        "link": "https://ugmonk.com/products/gather-zigzag-tray-walnut?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2042,
        "title": "Brutal: New: Warehouse Item - Hightide Cooler Cargo Bag (Large - Black) $37.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$37.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/products/black-large-main-306860.jpg?v=1741627771",
        "link": "https://ugmonk.com/products/cooler-cargo-bag-black?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5122,
        "title": "Extreme: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9557,
        "title": "Elite: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9525,
        "title": "Legendary: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6932,
        "title": "Brutal: Costco Members: Vitamix Ascent X2 SmartPrep Kitchen System Deluxe $550 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$550",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.costco.com/p/-/4000345877?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7605,
        "title": "Viral: New: Warehouse Item - Gather Note Tray (1x1 - Black) $19.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$19.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/products/note-tray-black-551356.jpg?v=1690906901",
        "link": "https://ugmonk.com/products/warehouse-item-gather-note-tray-1x1-black?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 1416,
        "title": "Must-Have: Nike Men's Air Max Excee Shoes (White) $60.75 + Free S&H",
        "category": "Fashion",
        "source": "FatWallet",
        "price": "$60.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ea27babaf_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DVX43?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2076,
        "title": "Extreme: AMD Ryzen 7 9800X3D CPU + MSI B850 GAMING PLUS Motherboard + MSI Liquid Cooler $459 + $2 S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$459",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.newegg.com/Product/Co...bo.4881669?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 3984,
        "title": "Legendary: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3053,
        "title": "Elite: 72 Can Odoland Leakproof Insulated Rolling Cooler Bag w/ Handle $27.20 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$27.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DQKK6JNV?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9649,
        "title": "Brutal: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 5960,
        "title": "Extreme: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4675,
        "title": "Insane: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1453,
        "title": "Must-Have: 3.4-Oz Old Spice Men's Antiperspirant Invisible Solid Deodorant (Swagger w/ Cedarwood) $3.80 w/ S&S",
        "category": "Beauty & Health",
        "source": "FatWallet",
        "price": "$3.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.amazon.com/dp/B00V0XR07M?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3378,
        "title": "Elite: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7368,
        "title": "Extreme: 12-Pk 12-Oz Canada Dry Cherry Ginger Ale Fruit Splash 3 for $14.75 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$14.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CJWYC?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 5563,
        "title": "Must-Have: New: Warehouse Item - Craighill Jack Puzzle $49.00",
        "category": "Toys & Fun",
        "source": "Ugmonk",
        "price": "$49.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/jack-1-new.jpg?v=1751916485",
        "link": "https://ugmonk.com/products/warehouse-item-craighill-jack-puzzle?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6022,
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
        "id": 1881,
        "title": "Brutal: New: Warehouse Item - Analog Weekly Kit (Walnut) $44.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$44.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/weekly-kit-walnut.jpg?v=1724343537",
        "link": "https://ugmonk.com/products/analog-weekly-kit-walnut-copy?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 8520,
        "title": "Unbeatable: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];