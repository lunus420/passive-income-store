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
        "id": 7342,
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
        "id": 4380,
        "title": "Viral: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 4318,
        "title": "Savage: TOOLEAGUE Magnetic Tool Mat w/ Telescoping Magnetic Pickup Pen $16 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$16",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/TOOLEAGUE-...3D%3D&amp;th=1?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 8632,
        "title": "Unbeatable: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1576,
        "title": "Extreme: Led Zeppelin: Live EP (Vinyl 180g Album) $13.65 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$13.65",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/Live-EP-Le...B0FJMFGDW2?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 9270,
        "title": "Unbeatable: Zone Tech Folding Outdoor Camping Travel Cot w/ Padded Mattress (Grey) $40 + Free S&H w/ Amazon Prime",
        "category": "Home & Kitchen",
        "source": "Slickdeals",
        "price": "$40",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/a5a55d26e_generated_image.png",
        "link": "https://www.amazon.com/dp/B0C62HG?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7593,
        "title": "Must-Have: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 3912,
        "title": "Exclusive: 27\" Acer Nitro 1080p 200Hz IPS FreeSync Premium Gaming Monitor $106 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$106",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.ebay.com/itm/197449122866?mkcid=1&mkrid=711-53200-19255-0&campid=4tima",
        "badge": "TOP PICK"
    },
    {
        "id": 7975,
        "title": "Epic: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 6847,
        "title": "Exclusive: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "SALE"
    },
    {
        "id": 1957,
        "title": "Unbeatable: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-amber-copy?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3491,
        "title": "Unbeatable: Amazon Essentials Men's 9\" Swim Trunks (4 Colors) $6.15 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$6.15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B08P67WYX1?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 1404,
        "title": "Extreme: 6oz. Amazon Grocery Stuffing Mix (Turkey Flavor) $0.90 or Less w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$0.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Amazon-Fresh-Turkey-Flavored-Stuffing/dp/B09SHMWMF4/ref=pd_cart_crc_cko_cp_d_?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 3795,
        "title": "Viral: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 8584,
        "title": "Legendary: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4126,
        "title": "Viral: 13.5-Oz Nanoskin 99.9% Isopropyl Alcohol for Industrial & Laboratory Use $5.60 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$5.60",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0F94KV22V?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2707,
        "title": "Unbeatable: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "BEST SELLER"
    },
    {
        "id": 4528,
        "title": "Elite: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 3447,
        "title": "Extreme: 3-Speed Wolfbox MF60 Electric Compressed Air Duster w/ 5 Nozzles $27.35 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$27.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H259TDR6?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 5739,
        "title": "Elite: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 9655,
        "title": "Viral: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 2197,
        "title": "Unbeatable: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 2865,
        "title": "Premium: 2-Pk Next Mouse Shell for Switch 2 (Black) $5 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.bestbuy.com/product/n...ku/6635633?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 2872,
        "title": "Must-Have: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3855,
        "title": "Viral: Select Areas: GE 8-Outlet + 3 USB 1500J Surge Protector w/ 6\" Flat Plug $11.85 ",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$11.85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B00AAHT?tag=bigterry20036-20",
        "badge": "BEST SELLER"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];