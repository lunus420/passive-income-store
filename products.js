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
        "id": 5662,
        "title": "Epic: IDEAALS Lighted Human & Dog Skeleton Halloween Decorations $25.20 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$25.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FC28B9HN?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7398,
        "title": "Epic: The Wallflowers: Exit Wounds (Vinyl LP) $10 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.bestbuy.com/product/t...c=pdp_page?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3104,
        "title": "Extreme: 6-Qt Chefman Dual Basket 1700W Air Fryer w/ Digital Touchscreen $70 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/Chefman-Qu...3D%3D&amp;th=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5934,
        "title": "Brutal: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 1321,
        "title": "Premium: Frosty the Snowman (4K Ultra HD + Blu-ray + Digital) $15 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/Frosty-Snowman-Ultra-Blu-ray-Digital/dp/B0BD912GGT/ref=sr_1_1?crid=3ENKGTDC3J&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3794,
        "title": "Insane: Insignia 2-Port up to 35W USB-C Port Wall Charger (White) $8 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$8",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/i...J2FPJKSF3L?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 2546,
        "title": "Must-Have: Prime Members: The Descent (2006) (4K UHD Digital Film) $4 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$4",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/video/d...X2QGXT64OF?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 3795,
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
        "id": 1225,
        "title": "Epic: Select Accounts: 20-Oz Chex Mix Snack Mix (Cheddar) $5.55 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$5.55",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0FDCNQ3DV/?fp&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6035,
        "title": "Epic: 32\" DUMOS Small Computer Desk (All White) $20 ",
        "category": "Tech",
        "source": "Slickdeals Food",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CLRLG?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2785,
        "title": "Premium: 691-Pc LEGO Fortnite Supply Llama Building Toy Set (77071) $24 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.target.com/p/lego-for...A-92538468?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 4948,
        "title": "Unbeatable: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 4181,
        "title": "Insane: 1-Pc LEGO 9\"x9\" Duplo Green Building Plate $9 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$9",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DJ1D4J5Q?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 6124,
        "title": "Insane: 140W 3-Port TALIX 20000mAh Laptop Power Bank w/ Built-In USB-C Cable $30 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GCDB9KTQ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 1752,
        "title": "Epic: 2-Pk 24-Oz Sawyer Products Premium Permethrin Insect Repellent Sprays for Fabrics $27.35 w/ S&S",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$27.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product...mid=&amp;psc=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6583,
        "title": "Elite: LEGO Star Wars: The Skywalker Saga (PlayStation 5) $10 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/355706836?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 3486,
        "title": "Legendary: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 3251,
        "title": "Premium: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 9266,
        "title": "Exclusive: 297-Pc LEGO Star Wars AT-RT Attack $36 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$36",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/LEGO-TBD-S...B0FMYWLLNJ?tag=bigterry20036-20",
        "badge": "SALE"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];