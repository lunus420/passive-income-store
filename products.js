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
        title: "The Complete Irregular Income Toolkit — All 4 Products (Save $18)",
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
    },
    {
        id: 8,
        title: "Phone Unlock Helper — Unlock Your Own Fully Paid-Off Phone",
        category: "Digital",
        price: 9.99,
        image: "covers/phone-unlock-helper-cover.webp",
        link: "https://payhip.com/b/koQYP",
        badge: "NEW"
    },
    {
        id: 9,
        title: "FixBuddy — Guided Repair Diagnosis for Home & Appliances",
        category: "Digital",
        price: 9.99,
        image: "covers/fixbuddy-cover.png",
        link: "https://payhip.com/b/5CqYF",
        badge: "NEW"
    }
];

const affiliateProducts = [
    {
        "id": 6182,
        "title": "Savage: Osprey Daylite Expandable 26+6 Travel Pack (Tunnel Vision Grey) $71.50 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$71.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DSQX5N64?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7614,
        "title": "Brutal: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 4886,
        "title": "Premium: V for Vendetta (4K Ultra HD + Blu-ray + Digital) $13 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$13",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/Vendetta-4...443&amp;sr=8-2?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1181,
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
        "id": 1213,
        "title": "Viral: 4-Qt Ninja FN090 Crispi Glass 3-in-1 Air Fryer (3 Colors) $89 + Free S/H",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$89",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/Ninja-...1350566851?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 5179,
        "title": "Elite: 191-Pc LEGO Sunflowers Building Kit $9 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$9",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FNRXHL41?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6162,
        "title": "Elite: New: Ridge KeyCase - Forged Ember $85.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$85.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-Keycase-RenderFront__FM.webp?v=1794348684",
        "link": "https://www.ridge.com/products/forged-ember-keycase?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3444,
        "title": "Epic: Ninja Professional Plus Select Series 1200W Blender w/ 72-Oz Pitcher $49 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$49",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/Profes...0112853098?ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 3459,
        "title": "Legendary: New: Analog Archive (Silver Aluminum) $129.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$129.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/aluminum-archive-silver-1.jpg?v=1791302272",
        "link": "https://ugmonk.com/products/analog-archive-silver-aluminum?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 9532,
        "title": "Insane: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 8723,
        "title": "Unbeatable: Star Wars The Black Series: Darth Vader Collectible Premium Electronic Helmet $113 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$113",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B09XGXRVXC?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 4249,
        "title": "Premium: New: Ridge Wallet + KeyCase - Peanuts - Speed Club $125.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/SpeedClub-DDK-THUMBNAIL.webp?v=1794591917",
        "link": "https://www.ridge.com/products/ridge-wallet-keycase-peanuts-speed-club?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 3213,
        "title": "Insane: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 2123,
        "title": "Unbeatable: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 4688,
        "title": "Exclusive: New: Ugmonk Utility Tote (Olive) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-olive-1.jpg?v=1793117266",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-olive?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9287,
        "title": "Elite: New: Ugmonk Utility Tote (Black) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-blk-1.jpg?v=1793117283",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-black?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2128,
        "title": "Legendary: New: Utility Tote Bundle - Set of 3 $75.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$75.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-bundle.jpg?v=1793118020",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-bundle-set-of-3?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8808,
        "title": "Extreme: 28-Piece Melissa & Doug Scoop & Serve Ice Cream Counter $27 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$27",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B01B1V10KA?lv=s&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2987,
        "title": "Premium: New: Ridge Wallet for MagSafe + Power Bank + KeyCase - Forged Ember $235.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$235.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-01__FM_8c412969-a60c-4b98-8e86-9a67c1789af6.webp?v=1794342997",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-keycase-forged-ember?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7644,
        "title": "Epic: 2.12\" CVLIFE Stainless Steel Blade Compact Pocket Folding Knife $17.95 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$17.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HBQHGL36?th=1&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 9349,
        "title": "Legendary: SAROS (PS5) $42 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G5RRPGFF?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 3011,
        "title": "Legendary: WORKPRO 25-Pc 3.6V Cordless Screwdriver & Driver Bit Set w/ Case $17 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$17",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/WORKPR...2199251892?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 9402,
        "title": "Epic: New: Ridge Wallet - Forged Ember $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-Wallet-RenderFront1__FM.webp?v=1794348646",
        "link": "https://www.ridge.com/products/forged-ember?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8127,
        "title": "Must-Have: Costco Members: Men's Spyder Full-Zip Sweater Jacket (various colors/sizes) $23 + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals Fashion",
        "price": "$23",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.costco.com/p/-/spyder...lor%3Agray?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4752,
        "title": "Brutal: Refurb: De'Longhi Magnifica Evo Espresso Machine w/ Automatic Frother $220 + Free S&H w/ Prime",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$220",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://home.woot.com/plus/delong..._cnt_wp_17?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 5625,
        "title": "Legendary: Chaps Men's Everyday Fleece Pullover Hoodie Sweatshirt $15 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.walmart.com/ip/Chaps-...hbdg=L1800?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8181,
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
        "id": 3750,
        "title": "Insane: adidas Men's Tiro 24 Training Pants (Team Navy Blue 2 / White, Limited Sizes) $16.80 + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$16.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.ebay.com/itm/15829941...9422180547?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "NEW"
    },
    {
        "id": 1543,
        "title": "Savage: New: Ridge Wallet for MagSafe + Power Bank - Forged Ember $199.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$199.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/ForgedEmber-01__FM_4c3f7e9b-55d1-4bc0-a838-c969195b7638.webp?v=1794342808",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-forged-ember?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5663,
        "title": "Viral: New: Ugmonk Utility Tote (Field Tan) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-tan-1.jpg?v=1793117251",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-field-tan?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7453,
        "title": "Insane: Toddler Boys & Girls Holiday Graphic Crewneck Tee (23 Character Choices) $4 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$4",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/Chevro...6110650520?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 2161,
        "title": "Must-Have: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 4398,
        "title": "Epic: 20-Oz Iberia Garlic Plantain Chips $7.80 ",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$7.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B081LW6MWQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3178,
        "title": "Epic: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3418,
        "title": "Insane: Shokz OpenRun Pro Premium Bone Conduction Open-Ear Sport Headphones (Black) $90 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.bestbuy.com/product/s...ku/6492430?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 1828,
        "title": "Legendary: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4278,
        "title": "Savage: 8-Pk 16.1-Oz Campbell\u2019s Chunky Classic Chicken Noodle Soup $11.05 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$11.05",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Campbells-Chunky-Classic-Chicken-Noodle/dp/B0B81SXXJZ/ref=sr_1_19?crid=375TOG&tag=bigterry20036-20",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];