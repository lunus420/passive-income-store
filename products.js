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
        "id": 1330,
        "title": "Brutal: 8-Oz Gold Bond Plumping Collagen Body & Face Serum $2.10 w/ S&S",
        "category": "Beauty & Health",
        "source": "Slickdeals",
        "price": "$2.10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.target.com/p/gold-bon...A-94919474?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5524,
        "title": "Premium: Judgment (Xbox Series X) $15 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.bestbuy.com/product/j...J7JHG4ZCG6?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6160,
        "title": "Exclusive: New: Ridge Wallet for MagSafe + KeyCase - Legacy Spec $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/LegacySpec-DDK-Render1.webp?v=1793116585",
        "link": "https://www.ridge.com/products/magsafe-wallet-keycase-legacy-spec?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4383,
        "title": "Elite: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9648,
        "title": "Must-Have: 30-Pk 3oz. Purina Fancy Feast Classic Pate Gourmet Cat Food (variety pack) $20 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...0DER&amp;psc=1?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 5406,
        "title": "Savage: New: Ridge Wallet + Power Bank + KeyCase - ONE PIECE - Straw Hat Crew + ONE PIECE + ONE PIECE $175.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$175.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-Wallet_PB_KC_ONEPIECE-01.webp?v=1792530651",
        "link": "https://www.ridge.com/products/wallet-power-bank-keycase-one-piece-straw-hat-crew-one-piece?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9924,
        "title": "Unbeatable: G Gradual Men's Tapered Sweatpants w/ 3 Zipper Pockets (various colors) $15 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09H7C4NPV?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9524,
        "title": "Extreme: Costco: 10' Mirador Adjustable Privacy Screen System for Pergolas $600 & More + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$600",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.costco.com/p/-/mirado...?langId=-1&ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 1005,
        "title": "Brutal: Creality Space Pi Filament X4L Dryer Box $76.50 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$76.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.ebay.com/itm/37756864...5857507705?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "NEW"
    },
    {
        "id": 3202,
        "title": "Viral: New: Ridge Wallet - 2026 World Series Champions - Milwaukee Brewers $150.00",
        "category": "Other",
        "source": "Ridge Gear",
        "price": "$150.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MilwaukeeBrewers-Wallet-RenderFront.webp?v=1793070004",
        "link": "https://www.ridge.com/products/2026-world-series-champions-milwaukee-brewers?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 1945,
        "title": "Unbeatable: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4048,
        "title": "Legendary: Anker Zolo 20,000mAh 30W USB-C Fast Charging Power Bank Travel Charger $36 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$36",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0FM2X9H9H?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 7803,
        "title": "Exclusive: 10-Person Thanksgiving Meal $35 + Free Pickup",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.walmart.com/i/shoppab...1069?click&ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 4271,
        "title": "Extreme: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 3004,
        "title": "Legendary: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 4348,
        "title": "Insane: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3987,
        "title": "Unbeatable: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2849,
        "title": "Savage: TCL 65\" QM8L Series SQD-Mini LED QLED 144Hz 4K Smart Google TV $1000 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$1000",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/t...J36QYTH359?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4500,
        "title": "Insane: DEWALT 20V MAX Brushless Cordless Drill/Driver & Impact Driver Combo Kit $169 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$169",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.lowes.com/pd/DEWALT-2...?irclickid&ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 6710,
        "title": "Premium: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4689,
        "title": "Epic: New: Ridge Wallet for MagSafe + Power Bank + KeyCase - ONE PIECE - Straw Hat Skulls + ONE PIECE + ONE PIECE $235.00",
        "category": "Fashion",
        "source": "Ridge Gear",
        "price": "$235.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/PDP_Kit-MagsafeWallet_PB_KC_StrawHatCrew-01.webp?v=1792530437",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-keycase-one-piece-straw-hat-skulls-one-piece?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9273,
        "title": "Extreme: Esabel.C Men's Bubble Golf Polo Shirt $10 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DT3MHRKM?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 6054,
        "title": "Epic: New: Ridge Power Bank - 10k mAh - 2026 World Series Champions - Milwaukee Brewers $89.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$89.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MagneticPowerbank-MilwaukeeBrewers-RenderBack.webp?v=1793070311",
        "link": "https://www.ridge.com/products/magnetic-power-bank-2026-world-series-champions-milwaukee-brewers?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 2896,
        "title": "Epic: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4554,
        "title": "Savage: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2507,
        "title": "Savage: 3-pc Husky Pry Bar Set (12\", 17\", & 25\") $25 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$25",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.homedepot.com/p/Husky.../311856651?ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 7716,
        "title": "Brutal: Super Monkey Ball Banana Mania (PS5) $15 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/s...J7JHG4K9SF?ref=money_maker_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];