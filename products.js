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
        "id": 7450,
        "title": "Savage: New: Ridge Wallet for MagSafe + KeyCase - Legacy Spec $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/LegacySpec-DDK-Render1.webp?v=1793116585",
        "link": "https://www.ridge.com/products/magsafe-wallet-keycase-legacy-spec?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 8936,
        "title": "Savage: 70-Oz Palmolive Ultra Oxy Liquid Dish Soap + $3 Walmart Cash $8 + Free Pickup",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$3",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/ip/Palmol.../132790951?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 2256,
        "title": "Epic: $50 Sony PlayStation Store eGift Card (Email Delivery) $42.50 (Email Delivery)",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.newegg.com/sony-50-00...6832886003?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 1425,
        "title": "Epic: DEWALT ATOMIC 20V MAX 5/8\" SDS + Hammer Drill w/ 6.0Ah & 4.0Ah Battery Kit $199 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$199",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.homedepot.com/p/DEWAL.../322364065?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 7002,
        "title": "Brutal: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 6012,
        "title": "Must-Have: New: Ridge Wallet + Power Bank + KeyCase - ONE PIECE - Straw Hat Crew + ONE PIECE + ONE PIECE $175.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$175.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-Wallet_PB_KC_ONEPIECE-01.webp?v=1792530651",
        "link": "https://www.ridge.com/products/wallet-power-bank-keycase-one-piece-straw-hat-crew-one-piece?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7904,
        "title": "Brutal: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1390,
        "title": "Premium: RYOBI 4-Tool USB Lithium Project Kit w/ 2x 2Ah Batteries + Charging Cable $99 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$99",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.homedepot.com/p/RYOBI.../325368236?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 9172,
        "title": "Epic: Shin Megami Tensei V Standard Edition (Nintendo Switch) $15 + Free S/H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.bestbuy.com/product/s...JXKWQRVCTY?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3226,
        "title": "Exclusive: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1000,
        "title": "Extreme: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 9340,
        "title": "Premium: 6-Pk Amazon Essentials Women's Peached Microfiber Lace Trim Panties (Various) from $2.70 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$2.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Ess...th=1&amp;psc=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9798,
        "title": "Brutal: Costco Members: 6-Pk 2.11-Oz Kirkland 5% Minoxidil Foam Hair Regrowth Solution $39 + $5 S/H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$39",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.costco.com/p/-/kirkla...?langId=-1&ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1098,
        "title": "Extreme: Amazon Essentials Men's Long-Sleeve Regular Fit Cotton Henley Shirt (Various) from $4.75 [Limited Sizes]",
        "category": "Fashion",
        "source": "FatWallet",
        "price": "$4.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Essentials-Relaxed-Fit-Sleeve-Henley/dp/B0FF5L64FK/ref=sr_1_1?crid=1VP&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7464,
        "title": "Savage: New: Ridge Wallet - 2026 World Series Champions - Milwaukee Brewers $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MilwaukeeBrewers-Wallet-RenderFront.webp?v=1793070004",
        "link": "https://www.ridge.com/products/2026-world-series-champions-milwaukee-brewers?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9785,
        "title": "Epic: 4-Pk Yearntown Women's Jogger Yoga Pants w/ Pockets (Various) $24 ",
        "category": "Fashion",
        "source": "Slickdeals Food",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FP1Z1THD?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9743,
        "title": "Legendary: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 5626,
        "title": "Premium: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 3367,
        "title": "Insane: New: Ridge Wallet for MagSafe + Power Bank + KeyCase - ONE PIECE - Straw Hat Skulls + ONE PIECE + ONE PIECE $235.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$235.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-MagsafeWallet_PB_KC_StrawHatCrew-01.webp?v=1792530437",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-keycase-one-piece-straw-hat-skulls-one-piece?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 2081,
        "title": "Insane: New: Ridge Power Bank - 10k mAh - 2026 World Series Champions - Milwaukee Brewers $89.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$89.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MagneticPowerbank-MilwaukeeBrewers-RenderBack.webp?v=1793070311",
        "link": "https://www.ridge.com/products/magnetic-power-bank-2026-world-series-champions-milwaukee-brewers?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5363,
        "title": "Elite: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1205,
        "title": "Unbeatable: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5153,
        "title": "Epic: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8173,
        "title": "Unbeatable: 27\" AOC G27MC36N 1080p 180Hz 0.5ms IPS Gaming Monitor $70 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.walmart.com/ip/AOC-G2...82?c=&amp;clic&ref=money_maker_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 6221,
        "title": "Legendary: Select Locations: 16-Pack 4.23-Oz Nongshim Shin Noodle Soup (Gourmet Spicy) $10.60 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$10.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...th=1&amp;psc=1?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 9853,
        "title": "Savage: The Nightmare Before Christmas Boys Halloween Union Suit $7.65 & More + Free Pickup",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$7.65",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.walmart.com/ip/The-Ni...9572562188?ref=money_maker_2026",
        "badge": "SALE"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];