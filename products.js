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
        "id": 7391,
        "title": "Extreme: PINSPARK Men's 7\" Mesh Quick Dry Athletic Running Shorts w/ Zipper Pockets $8 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$8",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DQ55XHQR?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7194,
        "title": "Elite: New: Discbound Heirloom Journal Bundle (Brown Leather 6\" x 8.5\") $179.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-brown.jpg?v=1790006312",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-brown-leather-6-x-8-5?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1115,
        "title": "Savage: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 9343,
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
        "id": 5832,
        "title": "Elite: Bonsenkitchen 4-In-1 Emulsion Hand Blender Set w/ 24oz. Beaker/Chopper Bowl $19.85 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Food",
        "price": "$19.85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F4KH2FFM?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 6920,
        "title": "Must-Have: Pre-Order: The Legend of Zelda: Ocarina of Time (Nintendo Switch 2) $59.90 + Free S/H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$59.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
        "link": "https://www.walmart.com/ip/The-Le...6a179f817d?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 1358,
        "title": "Insane: ZITY Men\u2019s Moisture-Wicking Polo Shirt w/ Pocket (various) $9 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$9",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GZBHCTWK?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1326,
        "title": "Legendary: Carhartt Men's Iconic K87 Pocket T-Shirt $13.70 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$13.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B01BXDSRAC?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5153,
        "title": "Legendary: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 7080,
        "title": "Legendary: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6831,
        "title": "Epic: 12\" Yonida Hybrid Non-Stick Skillet Frying Pan w/ Lid $24 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H752PTN3?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 1391,
        "title": "Insane: 12-Pk Scott ComfortPlus 310-Sheet 1-Ply Toilet Paper Mega Rolls (Soft Lavender) $5.40 w/ S&S",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$5.40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DKKPRGWL?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9919,
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
        "id": 4969,
        "title": "Legendary: New: Discbound Journal Archive $29.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$29.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-archive-new.jpg?v=1790005285",
        "link": "https://ugmonk.com/products/discbound-journal-archive?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3550,
        "title": "Insane: New: Discbound Journal Bundle (Standard 6\"x 8.5\" Journal) $99.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$99.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-cardstock.jpg?v=1790020388",
        "link": "https://ugmonk.com/products/discbound-journal-bundle-standard-6x-8-5-journal?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 8009,
        "title": "Unbeatable: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 3424,
        "title": "Viral: New: Discbound Heirloom Journal Bundle (Tan Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-tan.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-tan-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5365,
        "title": "Premium: 3-Pk 9\" Little Beauty Men's Athletic Shorts $15 ",
        "category": "Fashion",
        "source": "Slickdeals",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GGHVKWN1?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6561,
        "title": "Legendary: Select Accts: 17.64-Oz Orgain Creatine Monohydrate Micronized Powder (Unflavored) $12.25 w/ S&S",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$12.25",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DX784?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8128,
        "title": "Elite: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 3665,
        "title": "Premium: 12-Ct 1.76-Oz Pure Protein Bars (Chocolate Salted Caramel) $12.80 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$12.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Pure-Prote...r=8-9&amp;th=1?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1290,
        "title": "Insane: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 4547,
        "title": "Elite: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4687,
        "title": "Premium: New: Discbound Heirloom Journal Bundle (Black Leather - Standard 6\" x 8.5\") $179.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$179.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/journal-bundle-archive-blk.jpg?v=1790019430",
        "link": "https://ugmonk.com/products/discbound-heirloom-journal-bundle-black-leather-standard-6-x-8-5?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 7752,
        "title": "Epic: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];