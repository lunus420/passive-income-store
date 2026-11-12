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
        "id": 9464,
        "title": "Savage: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7904,
        "title": "Insane: New: Ridge Wallet - Forged Ember $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-Wallet-RenderFront1__FM.webp?v=1794348646",
        "link": "https://www.ridge.com/products/forged-ember?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 9171,
        "title": "Elite: Star Wars: Zero Company (PS5) $48 + Free S/H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$48",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product...mid=&amp;psc=1?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 3354,
        "title": "Must-Have: 832-Pc. LEGO Harry Potter Book Nook: Hogwarts Express Building Set $50 + Free S/H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DRW7WRX3?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2218,
        "title": "Insane: MSI Cyborg 15.6\" Laptop: FHD 144Hz IPS, i5-13420H, RTX 5050, 16GB RAM, 512GB SSD $800 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$800",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.walmart.com/ip/MSI-Cy...EGULAR&amp;ath?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7064,
        "title": "Viral: Milwaukee M18 18V XC Starter Kit w/ 2x 5.0Ah Batteries & Charger + 1 Select Tool $199 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$199",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.homedepot.com/p/Milwa.../320379720?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 4773,
        "title": "Brutal: New: Ridge Wallet + Power Bank + KeyCase - Forged Ember $225.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$225.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-01__FM_ab5b09c5-fabc-48ec-af82-58a636498f6e.webp?v=1794342671",
        "link": "https://www.ridge.com/products/wallet-power-bank-keycase-forged-ember?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 2180,
        "title": "Viral: New: Ridge Wallet for MagSafe + Power Bank - Forged Ember $199.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$199.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-01__FM_4c3f7e9b-55d1-4bc0-a838-c969195b7638.webp?v=1794342808",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-forged-ember?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3943,
        "title": "Premium: Casio G-Shock Men's Digital Watch (DW9052-1V) $44.95 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$44.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B000GAYQLI?th=1&tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 7820,
        "title": "Epic: New: Analog Archive (Silver Aluminum) $129.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$129.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/aluminum-archive-silver-1.jpg?v=1791302272",
        "link": "https://ugmonk.com/products/analog-archive-silver-aluminum?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 4404,
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
        "id": 4865,
        "title": "Savage: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2824,
        "title": "Must-Have: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3043,
        "title": "Savage: Avidlove Cami & Shorts Pajama Lingerie Set for Women (various) $6 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F485YW97?th=1&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4569,
        "title": "Extreme: New: Ridge Wallet for MagSafe + Power Bank + KeyCase - Forged Ember $235.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$235.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-01__FM_8c412969-a60c-4b98-8e86-9a67c1789af6.webp?v=1794342997",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-keycase-forged-ember?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 7123,
        "title": "Exclusive: 50\" Philips 50PUG7675/F7 QLED+ 4K UltraHD 144Hz Google Smart TV $198 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$198",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/17216450897?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 2223,
        "title": "Insane: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1972,
        "title": "Must-Have: 4-Qt Ninja FN090 Crispi Glass 3-in-1 Air Fryer (3 Colors) $89 + Free S/H",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$89",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/Ninja-...1350566851?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 6700,
        "title": "Exclusive: 2-Pk 6' Amazon Basics 240W USB-C Fast Charging Cable $8.90 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$8.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GR8L82YP?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8189,
        "title": "Must-Have: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 3821,
        "title": "Epic: New: Ugmonk Utility Tote (Olive) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-olive-1.jpg?v=1793117266",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-olive?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 1170,
        "title": "Viral: ANRABESS Womens Long Sleeve Mock Neck Fleece Lined Bodycon Mini Dress $12 ",
        "category": "Fashion",
        "source": "Slickdeals Food",
        "price": "$12",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H4DZJK9X?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4398,
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
        "id": 9753,
        "title": "Savage: Costco Members: Men's Spyder Full-Zip Sweater Jacket (various colors/sizes) $23 + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals Fashion",
        "price": "$23",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.costco.com/p/-/spyder...lor%3Agray?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3563,
        "title": "Exclusive: 761-Pc LEGO Up-Scaled Santa Minifigure (40820) $28 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-U...hbdg=L1800?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 1410,
        "title": "Insane: Open Box Excellent: Samsung HW-Q930H 9.1.4-Ch Soundbar w/ Sub & Speakers (2026) $762 + Free S&H & More (Select Stores)",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$762",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/s...=excellent?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 8393,
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
        "id": 7727,
        "title": "Premium: Lenovo Legion Pro 7 Gaming Laptop: Ryzen 9 9955HX3D, 16\" 3K, 32GB RAM, RTX 5080 $2850 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$2850",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/l...ku/6673558?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7786,
        "title": "Insane: Grace Karin Women's Elegant Bodycon Maxi Dress (Various Colors) $12.75 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$12.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HB4SHB1N?th=1&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6232,
        "title": "Premium: New: Ugmonk Utility Tote (Field Tan) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-tan-1.jpg?v=1793117251",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-field-tan?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4013,
        "title": "Elite: 10-Pc Milwaukee Screwdriver Set w/ 7.75\" 6-in-1 Wire Strippers Pliers $35 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.homedepot.com/p/Milwa.../318063468?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6637,
        "title": "Insane: New: Ugmonk Utility Tote (Black) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-blk-1.jpg?v=1793117283",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-black?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8956,
        "title": "Savage: New: Utility Tote Bundle - Set of 3 $75.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$75.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-bundle.jpg?v=1793118020",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-bundle-set-of-3?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2693,
        "title": "Must-Have: New: Ridge KeyCase - Forged Ember $85.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$85.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-Keycase-RenderFront__FM.webp?v=1794348684",
        "link": "https://www.ridge.com/products/forged-ember-keycase?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9073,
        "title": "Elite: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];