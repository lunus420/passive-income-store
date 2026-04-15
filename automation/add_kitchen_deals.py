#!/usr/bin/env python3
"""
Add cheap kitchen deals with real product images
"""

import json

# Cheap kitchen deals with real Amazon product images
kitchen_deals = [
    {
        "id": 10001,
        "title": "Amazon Basics 6-Piece Nonstick Cookware Set - $29.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$29.99",
        "originalPrice": "$49.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71X5F9P5PfL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=amazon+basics+cookware+set&tag=bigterry20036-20",
        "badge": "CHEAP"
    },
    {
        "id": 10002,
        "title": "BLACK+DECKER 2-Slice Toaster - $14.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$14.99",
        "originalPrice": "$24.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61aX1wC1xRL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=black+decker+toaster&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 10003,
        "title": "Hamilton Beach Electric Kettle - $19.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$19.99",
        "originalPrice": "$29.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71lVf5Gt5eL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=hamilton+beach+kettle&tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 10004,
        "title": "Mainstays 12-Piece Dinnerware Set - $15.99",
        "category": "Home",
        "source": "Walmart",
        "price": "$15.99",
        "originalPrice": "$24.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81z3qK9A9kL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=dinnerware+set+cheap&tag=bigterry20036-20",
        "badge": "CHEAP"
    },
    {
        "id": 10005,
        "title": "Ninja Food Chopper - $19.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$19.99",
        "originalPrice": "$29.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61qzZz1ZMFL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=ninja+chopper&tag=bigterry20036-20",
        "badge": "POPULAR"
    },
    {
        "id": 10006,
        "title": "Cuisinart Coffee Maker - $34.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$34.99",
        "originalPrice": "$49.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61ZJ2qC5eSL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=cuisinart+coffee+maker&tag=bigterry20036-20",
        "badge": "BEST SELLER"
    },
    {
        "id": 10007,
        "title": "Rubbermaid 50-Piece Food Storage Set - $24.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$24.99",
        "originalPrice": "$39.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81f9k0rK9LL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=rubbermaid+food+storage&tag=bigterry20036-20",
        "badge": "NEW"
    },
    {
        "id": 10008,
        "title": "Chefman Air Fryer - $49.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$49.99",
        "originalPrice": "$79.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71FZ6KfF3pL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=chefman+air+fryer&tag=bigterry20036-20",
        "badge": "HOT"
    },
    {
        "id": 10009,
        "title": "Oster Blender - $24.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$24.99",
        "originalPrice": "$39.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61Z1r5W8zQL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=oster+blender&tag=bigterry20036-20",
        "badge": "SALE"
    },
    {
        "id": 10010,
        "title": "Farberware Knife Set - $19.99",
        "category": "Home",
        "source": "Amazon",
        "price": "$19.99",
        "originalPrice": "$34.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61yD1pVX0tL._AC_SL1500_.jpg",
        "link": "https://www.amazon.com/s?k=farberware+knife+set&tag=bigterry20036-20",
        "badge": "CHEAP"
    }
]

# Load existing enhanced deals
with open('/home/explode_420/Antigravity/passive-income-store/automation/enhanced_deals.json', 'r') as f:
    existing_deals = json.load(f)

# Add kitchen deals
all_deals = kitchen_deals + existing_deals

# Save
with open('/home/explode_420/Antigravity/passive-income-store/automation/enhanced_deals.json', 'w') as f:
    json.dump(all_deals, f, indent=2)

print(f"Added {len(kitchen_deals)} cheap kitchen deals")
print(f"Total deals: {len(all_deals)}")
