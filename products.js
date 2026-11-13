const digitalProducts = [
    {
        id: 1,
        title: "[FREE] The Freelancer Money Starter Checklist — 17 Things To Do Before Your Next Invoice",
        category: "Digital",
        price: "FREE",
        image: "covers/media-generation-05-starter-checklist-cover-0-6823fe65-eaec-4085-b5b7-a725daab6e98.png",
        link: "https://payhip.com/b/n1DZU",
        badge: "FREE"
    },
    {
        id: 2,
        title: "Irregular Income Budget Dashboard — Google Sheets + Excel Template for Freelancers",
        category: "Digital",
        price: 19,
        image: "covers/media-generation-01-budget-dashboard-cover-0-4e1871c4-f74e-4d5e-a98f-d472b844a031.png",
        link: "https://payhip.com/b/h2wnZ",
        badge: "Best Seller"
    },
    {
        id: 3,
        title: "The Complete Irregular Income Toolkit — All 4 Products (Save $17)",
        category: "Digital",
        price: 29,
        image: "covers/media-generation-06-toolkit-bundle-cover-0-3fb9c098-c1dc-4fb4-a4ee-01ad3fa3bbeb.png",
        link: "https://payhip.com/b/daxf9",
        badge: "Best Value"
    },
    {
        id: 4,
        title: "Freelance Invoice Tracker — Never Lose Track of Who Owes You Again",
        category: "Digital",
        price: 12,
        image: "covers/media-generation-02-invoice-tracker-cover-0-6f09df05-1337-47e5-b7ab-49bc4ed5f05c.png",
        link: "https://payhip.com/b/aN6yO",
        badge: "NEW"
    },
    {
        id: 5,
        title: "Pay Yourself First — 12-Month Savings Goal Tracker (Printable PDF)",
        category: "Digital",
        price: 9,
        image: "covers/media-generation-03-savings-tracker-cover-0-5135e066-68e0-4510-a62e-ec234e339681.png",
        link: "https://payhip.com/b/4KAef",
        badge: "NEW"
    },
    {
        id: 6,
        title: "30-Day No-Spend Challenge — Spending Reset for Variable Income (Printable PDF)",
        category: "Digital",
        price: 7,
        image: "covers/media-generation-04-no-spend-challenge-cover-0-1b982ed5-35b2-4d29-b199-4eec69c30842.png",
        link: "https://payhip.com/b/KLoE8",
        badge: "NEW"
    },
    {
        id: 7,
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
        "id": 2390,
        "title": "Extreme: CyberPowerPC Desktop: Ryzen 7 9800X3D, RX 9070 16GB, 32GB DDR5, 1TB SSD $1750 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$1750",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/c...ku/6668823?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 7799,
        "title": "Savage: New: Analog Archive (Silver Aluminum) $129.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$129.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/aluminum-archive-silver-1.jpg?v=1791302272",
        "link": "https://ugmonk.com/products/analog-archive-silver-aluminum?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4255,
        "title": "Unbeatable: 832-Pc. LEGO Harry Potter Book Nook: Hogwarts Express Building Set $50 + Free S/H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DRW7WRX3?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 1979,
        "title": "Elite: New: Ridge KeyCase - Forged Ember $85.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$85.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-Keycase-RenderFront__FM.webp?v=1794348684",
        "link": "https://www.ridge.com/products/forged-ember-keycase?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9152,
        "title": "Exclusive: 6-Pk Puma Men's Athletic Crew Socks (Various) from $4.45 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$4.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B012AP1AX8?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 1526,
        "title": "Legendary: Hasbro Gaming Trouble Board Game $5 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B00D7OAOYI?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2487,
        "title": "Legendary: 44-Pc KNECT 3/8\" Deep & Shallow Impact Socket Set (SAE & Metric) $100 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$100",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G2L57?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1888,
        "title": "Exclusive: $100 Nintendo eShop Gift Card (Email Delivery) $88 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$100",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.newegg.com/nintendo-1...6888026010?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6261,
        "title": "Viral: MILESEEY 3-in-1 Digital Laser Tape Measure w/ 16' Tape & 131' Laser from $32 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$32",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...G3DVG?th=1&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1766,
        "title": "Elite: 50\" Philips 50PUG7675/F7 QLED+ 4K UltraHD 144Hz Google Smart TV $198 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$198",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/17216450897?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6559,
        "title": "Viral: Ninja Professional Plus Select Series 1200W Blender w/ 72-Oz Pitcher $49 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$49",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/Profes...0112853098?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 5412,
        "title": "Savage: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7603,
        "title": "Unbeatable: New: Ugmonk Utility Tote (Olive) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-olive-1.jpg?v=1793117266",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-olive?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9906,
        "title": "Savage: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1639,
        "title": "Exclusive: New: Ridge Wallet + KeyCase - Peanuts - Speed Club $125.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/SpeedClub-DDK-THUMBNAIL.webp?v=1794591917",
        "link": "https://www.ridge.com/products/ridge-wallet-keycase-peanuts-speed-club?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 4556,
        "title": "Savage: Makita 2x 5.0Ah Battery & Charger Kit + Bonus Tool $199 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$199",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.homedepot.com/p/Makit...-n/a-_-n/a?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 9463,
        "title": "Viral: New: Utility Tote Bundle - Set of 3 $75.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$75.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-bundle.jpg?v=1793118020",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-bundle-set-of-3?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 4902,
        "title": "Must-Have: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 6657,
        "title": "Insane: Prime: EcoFlow RAPID 25,000mAh 170W Laptop Power Bank w/ Dual 140W USB-C Ports $49 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$49",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FHB5WDKL?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8349,
        "title": "Viral: 8BitDo SN30 Pro Wireless Controller w/ Hall Effect Joysticks (G Classic) $33 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$33",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.amazon.com/gp/product...mid=&amp;psc=1?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 1305,
        "title": "Elite: Costco Members: Men's Spyder Full-Zip Sweater Jacket (various colors/sizes) $23 + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals Fashion",
        "price": "$23",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.costco.com/p/-/spyder...lor%3Agray?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 9200,
        "title": "Extreme: 12-Pk 15-Oz ReaLemon 100% Lemon Juice $12.15 ",
        "category": "Food & Grocery",
        "source": "FatWallet",
        "price": "$12.15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B00BHIRO7G?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9225,
        "title": "Viral: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 1810,
        "title": "Exclusive: Pre-Order Item: Star Wars A Celebration: 50 Years in a Galaxy (Hardcover Book) $46.60 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$46.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/Star-W...0864819782?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6841,
        "title": "Elite: 4-Qt Ninja FN090 Crispi Glass 3-in-1 Air Fryer (3 Colors) $89 + Free S/H",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$89",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/Ninja-...1350566851?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7078,
        "title": "Must-Have: New: Ridge Wallet for MagSafe + Power Bank - Forged Ember $199.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$199.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-01__FM_4c3f7e9b-55d1-4bc0-a838-c969195b7638.webp?v=1794342808",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-forged-ember?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2175,
        "title": "Legendary: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 9314,
        "title": "Viral: New: Ugmonk Utility Tote (Black) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-blk-1.jpg?v=1793117283",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-black?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 8887,
        "title": "Epic: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5779,
        "title": "Premium: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 2329,
        "title": "Must-Have: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1652,
        "title": "Viral: 28-Piece Melissa & Doug Scoop & Serve Ice Cream Counter $27 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$27",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B01B1V10KA?lv=s&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7829,
        "title": "Epic: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 6421,
        "title": "Exclusive: New: Ugmonk Utility Tote (Field Tan) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-tan-1.jpg?v=1793117251",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-field-tan?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 6953,
        "title": "Savage: New: Ridge Wallet - Forged Ember $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-Wallet-RenderFront1__FM.webp?v=1794348646",
        "link": "https://www.ridge.com/products/forged-ember?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6293,
        "title": "Legendary: New: Ridge Wallet for MagSafe + Power Bank + KeyCase - Forged Ember $235.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$235.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-01__FM_8c412969-a60c-4b98-8e86-9a67c1789af6.webp?v=1794342997",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-keycase-forged-ember?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 3174,
        "title": "Savage: Prime: BOSGAME E5 Mini PC: Ryzen 3 5300U, 8GB DDR4, 256GB SSD, Win 11 Pro $189 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$189",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GDZPLPP8?tag=bigterry20036-20",
        "badge": "VIRAL"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];