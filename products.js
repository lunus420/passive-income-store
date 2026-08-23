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
        "id": 8036,
        "title": "Premium: 27\" LG 27GX700A-B Ultragear 2560x1440 280Hz OLED G-Sync Monitor $382.75 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$382.75",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0FLLNVXFG?tag=bigterry20036-20",
        "badge": "VIRAL"
    },
    {
        "id": 3354,
        "title": "Epic: DeWALT Double Ended Nut Driver (1/4\" + 5/16\") $4.10 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$4.10",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09Y9G25CY?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 3666,
        "title": "Must-Have: 4-Pk TOURIT Reusable Ice Packs (Large) $6.50 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$6.50",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07TWTR3K8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 9578,
        "title": "Extreme: New: MW75 TUMI $750.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$750.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW75B_TUMI_800x800_Hero.png?v=1769444695",
        "link": "https://www.masterdynamic.com/products/mw75-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 5917,
        "title": "Exclusive: 4-Pk Apple AirTag (2nd Generation) $85 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$85",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0GJTXVN9Z?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 5955,
        "title": "Viral: UTWGN Men's Waterproof Insulated Ski Jacket w/ Detachable Hood $20 + Free S&H",
        "category": "Fashion",
        "source": "FatWallet",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CZZX4G4Y?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8979,
        "title": "Exclusive: 16-Oz Chemical Guys Tire Kicker Extra Glossy Tire Shine $7 + Free S&H w/ Prime",
        "category": "Other",
        "source": "FatWallet",
        "price": "$7",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://sellout.woot.com/offers/c...nt_wp_0_10?ref=money_maker_2026",
        "badge": "NEW"
    },
    {
        "id": 5755,
        "title": "Legendary: 194-Pc LEGO City Burger Truck Building Set $12.80 ",
        "category": "Toys & Fun",
        "source": "FatWallet",
        "price": "$12.80",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CGY4LZQ3?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6660,
        "title": "Epic: 21-L Thule EnRoute Backpack (Various Colors) $62.95 + Free S&H",
        "category": "Fashion",
        "source": "FatWallet",
        "price": "$62.95",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YS1QNV4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6323,
        "title": "Legendary: New: MH40 Wired $299.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40G1_Hero_1200x1200_V2.png?v=1763576920",
        "link": "https://www.masterdynamic.com/products/mh40-over-ear-headphones?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 2553,
        "title": "Savage: New: Analog Card Sleeve Multipack - Large (Set of 18) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-group.jpg?v=1786551178",
        "link": "https://ugmonk.com/products/large-analog-card-sleeve-multipack-set-of-18?ref=moment_partner_2026",
        "badge": "TOP PICK"
    },
    {
        "id": 2144,
        "title": "Viral: 6.7-Oz Calvin Klein Men's Obsession Eau De Toilette Spray $32.70 + Free S&H",
        "category": "Beauty & Health",
        "source": "Slickdeals",
        "price": "$32.70",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
        "link": "https://www.walmart.com/ip/seort/128852757?&ref=money_maker_2026",
        "badge": "VIRAL"
    },
    {
        "id": 9413,
        "title": "Viral: New: Analog Card Sleeves - Large (Earth) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-earth.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-earth-tone?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 1613,
        "title": "Elite: METAONLY Magnetic Screen Door Mesh (38\" x 82\", Black or White) from $7.90 ",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$7.90",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/gp/product/B0G4BMR5BJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8645,
        "title": "Brutal: 16-Count 11.6\" x 17.7\" Shinywear Refrigerator Shelf Liners (4-Color or Clear) $5 ",
        "category": "Home & Kitchen",
        "source": "Slickdeals Home",
        "price": "$5",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BXSP4YY8?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4478,
        "title": "Unbeatable: Select Home Depot Stores: 2-Pack Gearwrench OBD2 Bluetooth Diagnostic Tester $28 (Pricing/Availability Will Vary)",
        "category": "Tech",
        "source": "Slickdeals Temu",
        "price": "$28",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
        "link": "https://www.amazon.com/dp/B085TG89H4?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6049,
        "title": "Epic: GTPLAYER Sim Racing Wheel Stand Simulator w/ Shifter Mount $55 + Free S&H",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$55",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0FP9KCM6N?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 8751,
        "title": "Must-Have: MIXXIDEA Squirrel Feeder Picnic Table w/ Umbrella $9.35 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$9.35",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B08T14DSGX?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 5126,
        "title": "Brutal: New: MW09 TUMI $450.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$450.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW09B_TUMI-PDP_1350x1350_case.png?v=1734540611",
        "link": "https://www.masterdynamic.com/products/mw09-tumi?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 4606,
        "title": "Legendary: New: Analog Card Sleeves - Large (Monochromatic) $15.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$15.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-lrg-mono.jpg?v=1786549462",
        "link": "https://ugmonk.com/products/large-analog-card-sleeves-set-of-6-monochromatic?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 3438,
        "title": "Epic: 50-Pack Homexcel Microfiber Cleaning Cloth (12.5 x 12.5\", Multicolor) $15 ",
        "category": "Other",
        "source": "Slickdeals Home",
        "price": "$15",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B09YHTQ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7739,
        "title": "Epic: ORICO 5-Bay DAS USB 3.0 Hard Drive Enclosure for 3.5\" SATA HDDs $120 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals",
        "price": "$120",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B07GVBZ8K9?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7647,
        "title": "Unbeatable: Select Accts: 12-oz Community Coffee Ground Coffee (Caramel Cookie Butter) $3.30 w/ S&S",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$3.30",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.amazon.com/Community-..._1_23?dib=&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 1660,
        "title": "Savage: 2-Pc Ekouaer Women's Knit Lounge Sets (various colors) $12 ",
        "category": "Other",
        "source": "FatWallet",
        "price": "$12",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0H2DR6XDB?th=1&tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 3943,
        "title": "Savage: 2-Pk Tovolo Cat Ice Cube Mold $6 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B082BH6VNJ?tag=bigterry20036-20",
        "badge": "TOP PICK"
    },
    {
        "id": 5171,
        "title": "Premium: New: MH40 APPLIED ART FORMS $399.00",
        "category": "Tech",
        "source": "Master & Dynamic",
        "price": "$399.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MH40W2-AAF1_PDP_1350x1350_Hero.png?v=1761926777",
        "link": "https://www.masterdynamic.com/products/mh40-applied-art-forms?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 6284,
        "title": "Epic: New: Analog Card Sleeve Multipack - Small (Set of 18) $25.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$25.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/card-sleeve-small-group.jpg?v=1786550710",
        "link": "https://ugmonk.com/products/small-analog-card-sleeves-set-of-18-mulitpack?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 5230,
        "title": "Brutal: EF ECOFLOW Rapid Pro 146W 4-Port GaN Charging Block (3x USB-C + USB-A) $38 + Free S&H",
        "category": "Tech",
        "source": "FatWallet",
        "price": "$38",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/EF-ECOFLOW...G8HP/?th=1&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 2692,
        "title": "Savage: Pok\u00e9mon Trading Card Game: Mega Zygarde ex Premium Collection $45 or Less + Free S&H",
        "category": "Other",
        "source": "Slickdeals Toys",
        "price": "$45",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.target.com/p/pok-233-...A-95280894?ref=money_maker_2026",
        "badge": "HOT"
    },
    {
        "id": 4701,
        "title": "Must-Have: 3-Piece 16-oz  Chemical Guys Leather & Interior Care Bundle $24 ",
        "category": "Other",
        "source": "Slickdeals Fashion",
        "price": "$24",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0CVQXF2HJ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 6149,
        "title": "Extreme: Prime Members: 808-Pc LEGO Creator 3 in 1 Cozy House Building Set $42 + Free S&H",
        "category": "Toys & Fun",
        "source": "Slickdeals Home",
        "price": "$42",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
        "link": "https://www.amazon.com/dp/B0BLJ6CCXZ?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 7557,
        "title": "Brutal: New: MW50+ $299.00",
        "category": "Other",
        "source": "Master & Dynamic",
        "price": "$299.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0404/1101/files/MW50_S2_Hero-On-Ear_1200x1200_V2.png?v=1763056954",
        "link": "https://www.masterdynamic.com/products/mw50-wireless-on-and-over-ear-headphones?ref=moment_partner_2026",
        "badge": "HOT"
    },
    {
        "id": 5632,
        "title": "Brutal: 27\" LG UltraGear OLED QHD 1440p 480Hz Gaming Monitor $468 + Free S&H",
        "category": "Tech",
        "source": "Slickdeals Toys",
        "price": "$468",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
        "link": "https://www.amazon.com/dp/B0DMPTN8DG?tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 5053,
        "title": "Extreme: Shintenchi 6-ft x 4-ft Floorless Outdoor Metal Storage Shed w/ Window (Grey) $126 + Free S&H",
        "category": "Other",
        "source": "Slickdeals",
        "price": "$126",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B0HCNCFLJR?tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 2023,
        "title": "Premium: 2-pk 9.6-cup Rubbermaid Brilliance BPA-Free Food Storage Containers w/ Lids $20 ",
        "category": "Other",
        "source": "Slickdeals Food",
        "price": "$20",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
        "link": "https://www.amazon.com/dp/B07X3XTCHW?tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 4228,
        "title": "Extreme: New: 15 Minute Hourglass (Green) $30.00",
        "category": "Other",
        "source": "Ugmonk",
        "price": "$30.00",
        "originalPrice": "---",
        "image": "https://cdn.shopify.com/s/files/1/0167/4484/files/green-hourglass-2.jpg?v=1786636799",
        "link": "https://ugmonk.com/products/15-minute-hourglass-amber-copy?ref=moment_partner_2026",
        "badge": "NEW"
    },
    {
        "id": 2823,
        "title": "Must-Have: 7oz. PopCorners Kettle Corn Popped Corn Chips Bag (6 Flavors) 2 for $6 + Free Pickup",
        "category": "Food & Grocery",
        "source": "Slickdeals Food",
        "price": "$6",
        "originalPrice": "---",
        "image": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
        "link": "https://www.target.com/p/popcorne...nk=sametab?ref=money_maker_2026",
        "badge": "HOT"
    }
];

const allProducts = [...digitalProducts, ...affiliateProducts];