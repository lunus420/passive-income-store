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
        "id": 4849,
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
        "id": 8820,
        "title": "Legendary: New: Ridge Power Bank - 10k mAh Bundle - Founder Spec - 2-Pack $139.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$139.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MagneticPowerbank-Bundle-Founder_Spec-THUMBNAIL2.webp?v=1792610993",
        "link": "https://www.ridge.com/products/magnetic-power-bank-bundle-2-pack-founder-spec?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 8670,
        "title": "Premium: Logitech G305 LIGHTSPEED Wireless Hero 12K Sensor Gaming Mouse (Various) $30 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DCVMN51Z?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9840,
        "title": "Unbeatable: Select Stores: 764-Pc LEGO Harry Potter Luna Lovegood\u2019s House Building Set $63 + Free Pickup",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$63",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.target.com/p/lego-har...A-94756925?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 5389,
        "title": "Savage: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 8257,
        "title": "Elite: New: Ridge Wallet for MagSafe + Power Bank - Founder Spec $165.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$165.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/FounderSpec-01.webp?v=1792421100",
        "link": "https://www.ridge.com/products/magsafe-wallet-power-bank-founder-spec?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5131,
        "title": "Elite: 13.5-Oz Original Recipe Chex Mix Snack Mix (Traditional, Family Size) $2.75 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$2.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Chex-Mix-Traditional-Savory-Family/dp/B0CTSYP8NK/ref=sr_1_12?dib=eyJ2IjoiMSJ9&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5183,
        "title": "Elite: New: Analog Archive (Black Aluminum) $129.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$129.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/aluminum-archive-blk-1.jpg?v=1791302272",
        "link": "https://ugmonk.com/products/analog-archive-black-aluminum?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 4523,
        "title": "Extreme: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5995,
        "title": "Must-Have: YIWANFW Magnetic Fridge Shelf & Fruit Basket w/ 2 Hooks $14 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$14",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F633J68W?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 5976,
        "title": "Must-Have: New: Ridge Power Bank - 10k mAh Bundle - Legacy Spec - 2-Pack $139.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$139.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MagneticPowerbank-Bundle-Legacy_Spec-THUMBNAIL2.webp?v=1792610993",
        "link": "https://www.ridge.com/products/magnetic-power-bank-bundle-2-pack-legacy-spec?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9308,
        "title": "Elite: Razer Orochi V2 Wireless Gaming Mouse (2 Colors) $30 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0916MW7CG?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 1026,
        "title": "Premium: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 7341,
        "title": "Legendary: New: Discbound Journal Bundle (Standard 6\"x 8.5\" Journal) $99.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$99.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-cardstock.jpg?v=1790020388",
        "link": "https://ugmonk.com/products/discbound-journal-bundle-standard-6x-8-5-journal?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6329,
        "title": "Elite: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9522,
        "title": "Unbeatable: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 2656,
        "title": "Unbeatable: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5142,
        "title": "Brutal: Pikmin 4 (Nintendo Switch Digital Code) $39.90 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$39.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/3058036853?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3129,
        "title": "Savage: New: Ridge Power Bank - 10k mAh Bundle - Legacy Spec - 3-Pack $158.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$158.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MagneticPowerbank-Bundle-Legacy_Spec-THUMBNAIL1_1.webp?v=1792610993",
        "link": "https://www.ridge.com/products/magnetic-power-bank-bundle-3-pack-legacy-spec?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 3515,
        "title": "Premium: New: Analog - Today Cards $13.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$13.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/today-card.jpg?v=1790177479",
        "link": "https://ugmonk.com/products/analog-today-cards-1-pack?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 9487,
        "title": "Must-Have: 12-Pk 3.25-Oz Brunswick Golden Smoked Herring Fillets $17.55 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$17.55",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B08LMKZBZW?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 6776,
        "title": "Exclusive: New: Discbound Heirloom Journal Bundle (Black Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-blk.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-black-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 5550,
        "title": "Legendary: New: Ridge Power Bank - 10k mAh Bundle - Founder Spec - 3-Pack $158.00",
        "category": "Tech",
        "source": "Ridge Gear",
        "price": "$158.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0613/6213/files/MagneticPowerbank-Bundle-Founder_Spec-THUMBNAIL1_1.webp?v=1792610993",
        "link": "https://www.ridge.com/products/magnetic-power-bank-bundle-3-pack-founder-spec?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2230,
        "title": "Legendary: LEGO Star Wars: 529-Pc. Kylo Ren Helmet + 386-Pc. Kylo Ren\u2019s Command Shuttle $98 + Free Shipping",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$98",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.walmart.com/ip/LEGO-S...7608263844?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6497,
        "title": "Must-Have: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 6083,
        "title": "Unbeatable: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3095,
        "title": "Extreme: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7958,
        "title": "Unbeatable: 2-Pc All-Clad HA1 Expert Nonstick 10\" + 12\" Fry Pan Set $90 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0G3CW46BP?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5359,
        "title": "Premium: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];