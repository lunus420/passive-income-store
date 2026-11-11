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
        "id": 8895,
        "title": "Unbeatable: 15-Pk 16.9-oz Coca-Cola Zero Sugar Soda Bottles 3 for $24.60 w/ S&S",
        "category": "Food & Grocery",
        "source": "FatWallet",
        "price": "$24.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Coca-Cola-...?_encoding&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9801,
        "title": "Elite: ANRABESS Womens Long Sleeve Mock Neck Fleece Lined Bodycon Mini Dress $12 ",
        "category": "Fashion",
        "source": "Slickdeals Food",
        "price": "$12",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H4DZJK9X?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7869,
        "title": "Premium: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2001,
        "title": "Must-Have: New: Replacement Elastic - Green $15.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/Green-CashStrap-01.webp?v=1793833659",
        "link": "https://www.ridge.com/products/replacement-elastic-kit-green?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 2759,
        "title": "Legendary: New: Ugmonk Utility Tote (Field Tan) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-tan-1.jpg?v=1793117251",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-field-tan?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6743,
        "title": "Legendary: 6-Month Xbox Game Pass Essential Membership (Email Delivery) $33 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$33",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.newegg.com/microsoft-...6888351004?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4124,
        "title": "Extreme: Select Locations: Open Box Excellent: ROG Ally X 7\" 120Hz FHD Gaming Handheld $608 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$608",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.bestbuy.com/product/r...=excellent?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 8015,
        "title": "Exclusive: 15-Pc. 2\" CRAFTSMAN Phillips Screwdriver Bit Set $6 ",
        "category": "Home & Kitchen",
        "source": "FatWallet",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B07KHD8VXN?th=1&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5486,
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
        "id": 8069,
        "title": "Elite: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 3510,
        "title": "Legendary: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7311,
        "title": "Premium: New: Replacement Elastic - Rainbow Trout $15.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/RainbowTrout-CashStrap-01.webp?v=1793833635",
        "link": "https://www.ridge.com/products/replacement-elastic-kit-rainbow-trout?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 2077,
        "title": "Legendary: New: Ridge Wallet - 2026 World Series Champions - Milwaukee Brewers $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MilwaukeeBrewers-Wallet-RenderFront.webp?v=1793070004",
        "link": "https://www.ridge.com/products/2026-world-series-champions-milwaukee-brewers?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2757,
        "title": "Premium: 2-Pk Men's Threads Ultra Soft Moisture Wicking Crewneck T-Shirt (White or Black) $4.75 + Free S&H on $35+",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$4.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.walmart.com/ip/Thread...5232266952?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 3533,
        "title": "Viral: Prime Members: 5-Oz Amazon Grocery Cheese & Garlic Croutons 4 for $4.80 + Free S&H",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$4.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B09NSCN...uage=en_US?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8167,
        "title": "Viral: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 3041,
        "title": "Premium: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 6706,
        "title": "Extreme: 13.25-Oz Betty Crocker Super Moist Devil's Food Cake Mix $0.95 w/ S&S & More",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$0.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0C47MQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3121,
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
        "id": 2575,
        "title": "Insane: New: Utility Tote Bundle - Set of 3 $75.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$75.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-bundle.jpg?v=1793118020",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-bundle-set-of-3?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 2631,
        "title": "Epic: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 9136,
        "title": "Epic: Bruno Marc Men's Formal Oxford Dress Sneakers (2 Colors) $24 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ea27babaf_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G2S989GN?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7865,
        "title": "Exclusive: New: Ridge Wallet - Sakura $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/Sakura-Wallet-1-THUMBNAIL_f6ee5045-5a58-4ef3-b4e7-005e715b3c40.jpg?v=1782508910",
        "link": "https://www.ridge.com/products/sakura?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 9095,
        "title": "Extreme: New: Ridge Power Bank - 10k mAh - 2026 World Series Champions - Milwaukee Brewers $89.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$89.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MagneticPowerbank-MilwaukeeBrewers-RenderBack.webp?v=1793070311",
        "link": "https://www.ridge.com/products/magnetic-power-bank-2026-world-series-champions-milwaukee-brewers?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3319,
        "title": "Elite: New: Analog Archive (Silver Aluminum) $129.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$129.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/aluminum-archive-silver-1.jpg?v=1791302272",
        "link": "https://ugmonk.com/products/analog-archive-silver-aluminum?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6656,
        "title": "Extreme: New: Ugmonk Utility Tote (Olive) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-olive-1.jpg?v=1793117266",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-olive?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2022,
        "title": "Must-Have: New: Ugmonk Utility Tote (Black) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-blk-1.jpg?v=1793117283",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-black?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4454,
        "title": "Savage: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "SALE"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];