const digitalProducts = [
    {
        id: 1,
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
        "id": 3752,
        "title": "Epic: New: Analog Starter Kit (Black 5-Pack) $125.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-black-1-tags.jpg?v=1788890120",
        "link": "https://ugmonk.com/products/analog-starter-kit-black-5-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6741,
        "title": "Premium: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8307,
        "title": "Premium: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 1646,
        "title": "Legendary: New: Analog Starter Kit (Black 3-Pack) $79.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$79.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-black-1-tags.jpg?v=1788890120",
        "link": "https://ugmonk.com/products/analog-starter-kit-black-3-pack?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 3087,
        "title": "Legendary: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "VIRAL"
    },
    {
        "id": 3001,
        "title": "Elite: Prime Members: 14.5-Oz Amazon Fresh Diced Tomatoes (No Salt Added) 4 for $2.95 w/ Subscribe & Save + Free S/H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$2.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Bra...07TYTL6HT/?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9835,
        "title": "Savage: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8613,
        "title": "Brutal: Van Halen: Live in New Haven CT, 1986 (Vinyl LP) $19.10 ",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$19.10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GXCD7RM7?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2997,
        "title": "Brutal: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 5533,
        "title": "Savage: 3-Ct WSKFDTI Whirlpool Refrigerator Water Filter Replacements $13.20 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$13.20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HGG8M54W?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 8928,
        "title": "Premium: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9436,
        "title": "Viral: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 6458,
        "title": "Must-Have: 1-Dozen Callaway Golf Reva Golf Balls (Pearl) $13.50 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$13.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BMGZY?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 5019,
        "title": "Extreme: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1092,
        "title": "Elite: Prime Members: AstroAI Digital Tire Pressure Gauge w/ Inflator (3-250 PSI) $12.95 + Free S&H",
        "category": "Other",
        "source": "FatWallet",
        "price": "$12.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07D3PVBJ4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4011,
        "title": "Savage: Apasiri Tough Nylon Dog Chew Toy w/ Textured Rubber Center (Red/Beef Flavored) $6 ",
        "category": "Toys & Fun",
        "source": "Slickdeals Toys",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B08F5G6CGN?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 2372,
        "title": "Brutal: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 7395,
        "title": "Epic: 100-Ct. Nature Made Vitamin D3 1,000 IU Liquid Softgels $2.90 w/ S&S",
        "category": "Food & Grocery",
        "source": "FatWallet",
        "price": "$2.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXLTXFTS?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4367,
        "title": "Brutal: New: Analog Starter Kit (Silver 3-pack) $79.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$79.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-silver-1-tags2.jpg?v=1788890064",
        "link": "https://ugmonk.com/products/analog-starter-kit-silver-3-pack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 7483,
        "title": "Legendary: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 1392,
        "title": "Epic: New: Analog Starter Kit (Silver 5-pack) $125.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$125.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/sk-silver-1-tags2.jpg?v=1788890064",
        "link": "https://ugmonk.com/products/analog-starter-kit-silver-5-pack?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 7089,
        "title": "Elite: Pragmata (Xbox Series X|S Digital) $40 ",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.newegg.com/capcom-pra...6832233351?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 7083,
        "title": "Exclusive: Hardaddy Men's Ribbed Knit Long Sleeve Polo V Neck Sweater (various colors) $9 ",
        "category": "Fashion",
        "source": "Slickdeals Food",
        "price": "$9",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0D66H2HKP?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8832,
        "title": "Must-Have: New: Analog Starter Kit - BOGO Special $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/bogo.jpg?v=1788887383",
        "link": "https://ugmonk.com/products/analog-starter-kit-bogo-special?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 8499,
        "title": "Exclusive: DeWALT 20V Max 3/8\" Keyless Right Angle Cordless Drill (Tool Only) $99 + Free S/H",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$99",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.homedepot.com/p/DEWAL.../203316372?ref=money_maker_2026",
        "badge": "TOP PICK"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];