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
        "id": 7238,
        "title": "Savage: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 5075,
        "title": "Viral: 682-Pc LEGO City Yellow Bulldozer Building Toy Set (60466) $52 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$52",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DRW7PFQV?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1679,
        "title": "Viral: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1496,
        "title": "Viral: 100-Pc GobiDex Magnetic Tiles Unicorn Theme Building Set $20 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GFWK46TK?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8363,
        "title": "Elite: New: Analog Starter Kit (Silver 5-pack) $125.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-silver-1-tags2.jpg?v=1788890064",
        "link": "https://ugmonk.com/products/analog-starter-kit-silver-5-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5047,
        "title": "Premium: Costco Members: 2-Pack $50 DoorDash eGift Cards (Email Delivery) $80 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.costco.com/p/-/doorda...4000279552?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 5714,
        "title": "Brutal: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4183,
        "title": "Must-Have: 1-Gal Teexpert Mulch Gravel Glue $15 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G6ZNSRMX?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1623,
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
        "id": 2823,
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
        "id": 9878,
        "title": "Brutal: Schwinn Rear Bike Rack (Fits 24\"-29\" & 700c Wheels, Supports 26 Lbs Cargo) $13.25 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$13.25",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09SVKLQ4G?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 3328,
        "title": "Viral: Sennheiser Consumer Audio Momentum 4 Wireless Headphones $164.80 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$164.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CCRZPKR1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8879,
        "title": "Premium: Select Accounts: 3-lb Reveal Grain Free Complete Dry Cat Food (Whitefish) $4.20 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$4.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07PT6744Q?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 8794,
        "title": "Legendary: 1102-pc Lego Icons Autumn Cottage Garden Building Set (11372) $85 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-I...7062121992?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7163,
        "title": "Unbeatable: 573-Pc LEGO ONE PIECE Buggy the Clown\u2019s Circus Tent (75637) $37.40 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$37.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DRW4ZZK3?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7933,
        "title": "Viral: 5-Pc Rerdeim Putty Knife w/ Rubber Ergonomic Handles (1\"- 5\" Assorted Sizes) $6 ",
        "category": "Home & Kitchen",
        "source": "FatWallet",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FX4B5?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 9182,
        "title": "Premium: 32-Oz Nate's 100% Pure Raw & Unfiltered California Honey $8.45 or Less ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$8.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07DHQQFGM?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2888,
        "title": "Elite: 206-Pc LEGO Disney & Pixar\u2019s Toy Story Celebration Train & RC Car Toddler Toy $32 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$32",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0DRW5H8WV?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 3739,
        "title": "Legendary: Olight BatonUltra EDC 1800-Lumens Rechargeable Pocket Flash Light (Olive Green) $70 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GJCSMVDC?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7429,
        "title": "Epic: 3-Ct Philips Sonicare Genuine C2 Optimal Plaque Control Toothbrush Heads $6.40 w/ S&S",
        "category": "Beauty & Health",
        "source": "FatWallet",
        "price": "$6.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.amazon.com/dp/B078BF27BF?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2182,
        "title": "Epic: 2-Pc Ekouaer Women's Pointelle Ribbed Knit Pajama Lounge Set $10 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H2TSS8CZ?th=1&tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 7872,
        "title": "Elite: 1-Gal Meguiar's Gold Class Car Wash $8.50 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$8.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B071HR1?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 7524,
        "title": "Savage: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4408,
        "title": "Exclusive: New: Analog Starter Kit - BOGO Special $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/bogo.jpg?v=1788887383",
        "link": "https://ugmonk.com/products/analog-starter-kit-bogo-special?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 6080,
        "title": "Epic: Select Amazon Accts: 4oz. Blue Buffalo Wilderness Wild Dog Treats (Duck/Chicken) $3 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$3",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B08C7H7?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6916,
        "title": "Unbeatable: 20-Oz Amazon Grocery Apple Pie Filling $2.20 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$2.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fre...to_dp_puis?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 6378,
        "title": "Viral: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 9718,
        "title": "Must-Have: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6424,
        "title": "Insane: 20-Pk 4.2-Oz Nongshim Shin Ramyun Ramen Noodle (Beef Flavored Broth) $18 w/ S&S",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$18",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Nongshim-Signature-Flavored-Microwaveable-Packaging/dp/B00778B90S/?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 6327,
        "title": "Must-Have: Pre-Order: Nintendo Switch 2 Legend of Zelda 40th Case & Screen Protector $39 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$39",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.walmart.com/ip/Ninten...om=/search?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 7394,
        "title": "Exclusive: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 8167,
        "title": "Elite: New: Analog Starter Kit (Black 3-Pack) $79.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$79.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-black-1-tags.jpg?v=1788890120",
        "link": "https://ugmonk.com/products/analog-starter-kit-black-3-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9175,
        "title": "Legendary: Prime Members: 16-Oz Amazon Grocery Canned Traditional Refried Beans 4 for $2.80 w/ S&S + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$2.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fresh-Canned-Traditional-Refried/dp/B0BZBGMGK7/ref=sr_1_7?dib=eyJ2Ijoi&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6354,
        "title": "Exclusive: New: Analog Starter Kit (Black 5-Pack) $125.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-black-1-tags.jpg?v=1788890120",
        "link": "https://ugmonk.com/products/analog-starter-kit-black-5-pack?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 3127,
        "title": "Legendary: 20-Pk 0.85-Oz Cheez-It & Pringles Variety Snack Packs (4 Flavors) $6.85 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$6.85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FWQQYN4M?th=1&tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 4872,
        "title": "Must-Have: New: Analog Starter Kit (Silver 3-pack) $79.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$79.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-silver-1-tags2.jpg?v=1788890064",
        "link": "https://ugmonk.com/products/analog-starter-kit-silver-3-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6549,
        "title": "Extreme: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];