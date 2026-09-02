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
        "id": 8039,
        "title": "Premium: 230-pc Craftsman Versastack Mechanics Tool Set w/ 1/4\", 3/8\" & 1/2\" Ratchets $129 + Free S&H",
        "category": "Home & Kitchen",
        "source": "FatWallet",
        "price": "$129",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CMJF6DYD?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 3428,
        "title": "Viral: Koalababy Baby Electric Nasal Aspirator w/ Soft Silicone Tips, Light & Music $15 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BRB9KKQ6?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 6335,
        "title": "Brutal: LetsJoli Women's Water Drop Wireless Full Coverage Seamless Jelly Push-Up Bra from $8.50 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$8.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GWLX58K1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5721,
        "title": "Elite: 1420-Pc LEGO Icons Mayor Manor Building Set $98 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$98",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-I...8876013973?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1103,
        "title": "Exclusive: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-green?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 8515,
        "title": "Premium: 243-Pc LEGO Technic Monster Jam Sparkle Smash Pull-Back Truck Building Set $20 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-T...om=/search?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 5623,
        "title": "Must-Have: 213-Pc LEGO Classic Creative Suitcase Building Kit (10713) $10 + Free Pickup",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B075QRWRYP?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2313,
        "title": "Extreme: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 1396,
        "title": "Epic: New: Discbound Journal Refill - Blank (Standard 6\" x 8.5\") $14.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$14.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/blank-1.jpg?v=1788361965",
        "link": "https://ugmonk.com/products/discbound-journal-refill-blank-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 5833,
        "title": "Exclusive: Happybag LED Rechargeable Axolotl Dimmable Night Light $8.55 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$8.55",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DMJJ779V?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3950,
        "title": "Elite: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6716,
        "title": "Unbeatable: 24-Pack 0.5-Oz Pirate's Booty Cheese Puffs (Aged White Cheddar) $8.45 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$8.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ea27babaf_generated_image.png",
        "link": "https://www.amazon.com/dp/B07D45W364?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8048,
        "title": "Unbeatable: 8oz. Amazon Grocery Tomato Sauce Can (Regular or No Salt Added) 4 for $1.45 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$1.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product...itle_1?smi&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4871,
        "title": "Premium: Intex Mini USB Powered Air Pump with 3 Nozzles for Mattresses and Inflatables $9.90 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$9.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/a5a55d26e_generated_image.png",
        "link": "https://www.walmart.com/ip/Intex-...om=/search?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 9092,
        "title": "Exclusive: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1563,
        "title": "Epic: GRACE KARIN Girls Floral Long Sleeve Dress (Various) $9.85 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$9.85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H6GKBST2?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 5136,
        "title": "Must-Have: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 1722,
        "title": "Unbeatable: Costco Members: Winix C909 4-Stage Air Purifier $160 + $5 S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$160",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.costco.com/.product.100842491.html?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 8419,
        "title": "Elite: 6-Cup Genuine Fred Nesting Mushroom Measuring Cups $7.45 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$7.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BT87J2JH?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 6697,
        "title": "Extreme: 293-Pc LEGO Star Wars 2026 Advent Calendar w/ Festive Minifigures $35 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-S...pe=REGULAR?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 1649,
        "title": "Viral: $100 Google Play eGift Card + $15 Best Buy eGift Card (Email Delivery) $100 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$100",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.bestbuy.com/product/g...ku/6346292?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 8511,
        "title": "Insane: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 9832,
        "title": "Epic: Mattel Games UNO Junior Marvel Spidey & His Amazing Friends Card Game $6 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FZK1R3GR?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3569,
        "title": "Must-Have: Maamgic Men's 5.5\" Quick Dry Swim Trunks w/ Compression Liner (Various) $12 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$12",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLNRPY1R?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 2452,
        "title": "Savage: VTOMAN X1 2500A Jump Starter / 150PSI Air Compressor for 8.5L Gas/6L Diesel $50 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B09G5WC4TD?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 6567,
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
        "id": 8727,
        "title": "Brutal: 1102-Pc LEGO Icons Autumn Cottage Garden Building Set $85 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-I...om=/search?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 2859,
        "title": "Legendary: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 8166,
        "title": "Legendary: Rossetta Dual Lens Galaxy Projector w/ Bluetooth, White Noise & Remote $15 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CZD1JTZK?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 8503,
        "title": "Unbeatable: LNDU WiFi Smart Front Door Locks Set w/ Voice & Fingerprint Entry $40 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HF77R327?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4819,
        "title": "Epic: RIDGID 18V MAX Output Starter Kit w/ 2x 4 Ah Batteries & Charger $79 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$79",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.homedepot.com/p/RIDGI.../328296486?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9276,
        "title": "Epic: New: Discbound Journal Refill - Lined (Standard 6\" x 8.5\") $14.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$14.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/lined-1.jpg?v=1788361855",
        "link": "https://ugmonk.com/products/discbound-journal-refill-lined-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 1967,
        "title": "Viral: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 1101,
        "title": "Viral: 12.3-Oz Kashi GO Protein + Fiber Cereal (Original) $3.80 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$3.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0DT1JJ9H1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2258,
        "title": "Epic: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 7692,
        "title": "Must-Have: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7035,
        "title": "Brutal: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 2779,
        "title": "Epic: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8761,
        "title": "Exclusive: 788-Pc LEGO Harry Potter Knockturn Alley Wizarding Shops Building Set $95 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-H...pe=REGULAR?ref=money_maker_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];