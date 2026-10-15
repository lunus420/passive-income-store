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
        "id": 4718,
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
        "id": 6814,
        "title": "Unbeatable: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7040,
        "title": "Extreme: adidas Sale: Select Shoes, Clothing, Accessories & More 40% Off + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "Check Deal",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ea27babaf_generated_image.png",
        "link": "https://www.ebay.com/str/adidas?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "SALE"
    },
    {
        "id": 6680,
        "title": "Elite: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 5276,
        "title": "Elite: 6-Qt Chefman Dual Basket 1700W Air Fryer w/ Digital Touchscreen $70 + Free S&H",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/Chefman-Qu...3D%3D&amp;th=1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2323,
        "title": "Elite: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 9594,
        "title": "Premium: Corona Men's & Big Men's Graphic Button-Up Shirt (2 Colors, Select Sizes) from $3.90 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$3.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.walmart.com/ip/Corona...7978410440?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 6267,
        "title": "Viral: Select Stores: 764-Pc LEGO Harry Potter Luna Lovegood\u2019s House Building Set $63 + Free Pickup",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$63",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.target.com/p/lego-har...A-94756925?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 4680,
        "title": "Exclusive: Time and Tru Per My Last Email Cotton Baseball Hat $2.50 + Store Pick Up",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$2.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.walmart.com/ip/TIME-A...om=/search?ref=money_maker_2026",
        "badge": "SALE"
    },
    {
        "id": 9409,
        "title": "Legendary: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9288,
        "title": "Elite: 3-pc LONG VACATION Hardside Spinner Luggage Set (Onyx Black, 20\"/24\"/28\") $104 & More + Free S&H",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$104",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FMK3F1TP?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 3736,
        "title": "Must-Have: 34\" Acer Nitro ED0 3440x1440 120Hz 1ms FreeSync Curved Gaming Monitor $189 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$189",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.walmart.com/ip/Acer-N...8247950004?ref=money_maker_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 2915,
        "title": "Savage: 2-Pk KOOPER 3-Head 210 LED Solar Motion Sensor Flood Lights $13.65 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$13.65",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B09F3DJ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 9850,
        "title": "Savage: Costco Members: 3-Pc Pyrex Durable Tempered Glass Measuring Cup Set $17 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$17",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.costco.com/p/-/pyrex-...?langId=-1&ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 3994,
        "title": "Extreme: Hyrule Warriors: Age of Calamity + Expansion Pass (Nintendo Switch Digital) $33.60 ",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$33.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/208554908?ref=money_maker_2026",
        "badge": "SALE"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];