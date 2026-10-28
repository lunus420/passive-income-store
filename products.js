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
        "id": 6306,
        "title": "Unbeatable: New: Ridge Wallet for MagSafe + Power Bank - ONE PIECE - Straw Hat Skulls + ONE PIECE $195.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$195.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-MagsafeWallet_PB_StrawHatCrew-01.webp?v=1792530090",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-one-piece-straw-hat-skulls-one-piece?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9337,
        "title": "Premium: New: Ridge Wallet for MagSafe + Power Bank + KeyCase - ONE PIECE - Straw Hat Skulls + ONE PIECE + ONE PIECE $235.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$235.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-MagsafeWallet_PB_KC_StrawHatCrew-01.webp?v=1792530437",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-keycase-one-piece-straw-hat-skulls-one-piece?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1874,
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
        "id": 9237,
        "title": "Brutal: New: Ridge Wallet for MagSafe + KeyCase - Legacy Spec $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/LegacySpec-DDK-Render1.webp?v=1793116585",
        "link": "https://www.ridge.com/products/magsafe-wallet-keycase-legacy-spec?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8887,
        "title": "Legendary: Select Locations: 16-Pack 4.23-Oz Nongshim Shin Noodle Soup (Gourmet Spicy) $10.60 w/ S&S",
        "category": "Other",
        "source": "FatWallet",
        "price": "$10.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...th=1&amp;psc=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5873,
        "title": "Insane: 8BitDo Ultimate 2C Wireless Controller for Nintendo Switch (Transparent Black) $24 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.bestbuy.com/product/8...ku/6649542?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 4093,
        "title": "Brutal: New: Ridge Wallet + Power Bank + KeyCase - ONE PIECE - Straw Hat Crew + ONE PIECE + ONE PIECE $175.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$175.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-Wallet_PB_KC_ONEPIECE-01.webp?v=1792530651",
        "link": "https://www.ridge.com/products/wallet-power-bank-keycase-one-piece-straw-hat-crew-one-piece?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 1546,
        "title": "Viral: 3-Port TALIX 20000mAh 140W USB-C Power Bank (2x USB-C + USB-A) $39 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$39",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HDZ6GVZX?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1501,
        "title": "Unbeatable: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4622,
        "title": "Premium: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 2446,
        "title": "Unbeatable: Lost Judgment (PS4) $15 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.bestbuy.com/product/l...J7JHG4K9YW?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 8935,
        "title": "Insane: New: Ugmonk Utility Tote (Black) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-blk-1.jpg?v=1793117283",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-black?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 3044,
        "title": "Elite: New: Utility Tote Bundle - Set of 3 $75.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$75.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-bundle.jpg?v=1793118020",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-bundle-set-of-3?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 3543,
        "title": "Viral: 221-Pc LEGO City Off-Road Mountain Truck Building Toy $11.90 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$11.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DJ1BH9T1?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 5969,
        "title": "Insane: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4558,
        "title": "Must-Have: 16-Oz 365 by Whole Foods Market Frosted Wheat Squares Cereal $2.45 (or less) w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$2.45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/365-Everyd...9hdGY&amp;th=1?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 9524,
        "title": "Must-Have: New: Ridge Wallet + Power Bank - ONE PIECE - Straw Hat Crew + ONE PIECE $145.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$145.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-Wallet_PB_ONEPIECE-01.webp?v=1792529545",
        "link": "https://www.ridge.com/products/wallet-power-bank-one-piece-straw-hat-crew-one-piece?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2999,
        "title": "Epic: 512GB Samsung P9 microSD Express Memory Card $99 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$99",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FT995SPF?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4108,
        "title": "Premium: 1TB Lenovo Legion Go S Ryzen Z1 Extreme 8\" Handheld Gaming PC $1000 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$1000",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.bestbuy.com/product/l...ku/6619188?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 7350,
        "title": "Savage: New: Ugmonk Utility Tote (Field Tan) $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/tote-tan-1.jpg?v=1793117251",
        "link": "https://ugmonk.com/products/ugmonk-utility-tote-field-tan?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 3703,
        "title": "Insane: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 4152,
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
        "id": 3513,
        "title": "Premium: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 4564,
        "title": "Unbeatable: G Gradual Men's UPF 50+ Long Sleeve Rash Guard Swim Shirt (various) $10 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G5WK5YKS?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 9099,
        "title": "Brutal: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4318,
        "title": "Savage: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4763,
        "title": "Epic: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4072,
        "title": "Savage: New: Analog Archive (Silver Aluminum) $129.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$129.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/aluminum-archive-silver-1.jpg?v=1791302272",
        "link": "https://ugmonk.com/products/analog-archive-silver-aluminum?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 2011,
        "title": "Insane: Alimens & Gentle Mens Stretch Dry Fit Printed Golf Shirts (various) $12 ",
        "category": "Fashion",
        "source": "FatWallet",
        "price": "$12",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FY3K171S?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 9728,
        "title": "Elite: 16oz. 365 by Whole Foods Market Organic Lasagne Pasta $1.90 or Less w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$1.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...mid=&amp;psc=1?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 6152,
        "title": "Legendary: Ozark Trail Padded Folding Love Seat Camping Chair (Red) $29 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$29",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.walmart.com/ip/Ozark-...072614847?&ref=money_maker_2026",
        "badge": "HOT"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];