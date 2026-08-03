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
        "id": 2968,
        "title": "Extreme: 379-Pc LEGO Marvel Iron Spider-Man Bust Collectible (76326) $48 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$48",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-S...273436?cla&ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 3159,
        "title": "Unbeatable: 225-Pc LEGO Creator 3-in-1 Wild Animals Tropical Toucan Building Toy Set $10 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DRW5YM7M?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1540,
        "title": "Insane: Select Accounts: 96-Ct Fresh Roasted Coffee Organic Pods (Variety Pack) $20.90 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$20.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product...4QAPJ&amp;th=1?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4567,
        "title": "Premium: 11-oz MW Polar Peeled & Pitted Lychee Asian Fruit $3 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$3",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09NQDPDVH?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 9214,
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
        "id": 2451,
        "title": "Viral: 12\" Tramontina Professional Restaurant Nonstick Aluminum Fry Pan $21 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$21",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B009HBKQR0?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7334,
        "title": "Epic: Hard Boiled: Deluxe Limited Edition (4K Ultra HD + Blu-ray) $38.95 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$38.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product...mid=&amp;psc=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6104,
        "title": "Must-Have: TayMac 2.75\" Deep 1-Gang Weatherproof Electrical Outlet Cover $7.95 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$7.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B00JU532B0?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 9058,
        "title": "Savage: Prime Members: 15.25-Oz Amazon Grocery Canned Whole Kernel Corn 4 for $2.40 w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$2.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fre...r_1_10?cri&tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 8943,
        "title": "Legendary: 2-Ct $100 Microsoft Xbox eGift Card (Email Delivery) $168 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$100",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.newegg.com/Product/Co...bo.4879617?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 9664,
        "title": "Savage: 22\" x 19\" Aisslro Silicone Dog or Cat Feeding Mat w/ Raised Edges (2 Colors) $9 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$9",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CWL4H?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3670,
        "title": "Insane: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 7114,
        "title": "Premium: Select Kind Breakfast Protein Bars, Snack Bars, Granola, Granola Bars & More Extra 40% Off w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "Check Deal",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/promotion/...G62HU?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1011,
        "title": "Exclusive: 3 Days of the Condor (4K UHD) $13.85 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$13.85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/Days-Condo...173&amp;sr=8-1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2299,
        "title": "Unbeatable: Select Barbie Dolls, Playsets & Collectibles Sale from $5.95 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$5.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/FSHNST...7693150829?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 2576,
        "title": "Extreme: 12-Pk 12-Oz Dr Pepper Zero Sugar Soda (Strawberries & Cream) 3 for $14.75 w/ S&S",
        "category": "Food & Grocery",
        "source": "FatWallet",
        "price": "$14.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BKR54R6S?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 6880,
        "title": "Exclusive: 16.1oz. Campbell's Protein Homestyle Chicken & Rotini Soup $1.70 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$1.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GM224MG6?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 7894,
        "title": "Extreme: 4TB Samsung 990 EVO Plus M.2 2280 PCIe Gen 4x4 NVMe Solid State Drive $315 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$315",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09DBF8FX1?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 5094,
        "title": "Savage: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 8865,
        "title": "Premium: 3-Port wegear 67W USB-C GaN Fast Charger w/ Foldable Plug (2x USB-C, 1x USB-A) $11.30 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$11.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FB8LXRD2?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4770,
        "title": "Epic: Star Trek VIII: First Contact (4K Ultra HD + Blu-ray + Digital) $12.30 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$12.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BSNX5ZW8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1607,
        "title": "Extreme: 32-Oz Owala FreeSip Insulated Stainless Steel Water Bottle w/ Spout (Orange) $22.40 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$22.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F3KZ2GDS?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 5049,
        "title": "Brutal: 19-Pc Milwaukee SAWZALL Wood & Metal Cutting Bi-Metal Reciprocating Saw Blade Set $16 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$16",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.homedepot.com/p/Milwa.../325350247?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 9670,
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
        "id": 4232,
        "title": "Unbeatable: 12-Count Sharpie Ultra Fine Point Permanent Markers (Black) $6.75 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$6.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Sharpie-37...r_1_5?dib=&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1137,
        "title": "Unbeatable: GameSir Tegenaria Lite Wired Controller w/ Hall Effect Sticks (Gray or White) $10 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/16533374741?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8181,
        "title": "Extreme: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
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