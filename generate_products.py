import json
import random

categories = ['Electronics', 'Home', 'Fashion', 'Beauty', 'Food', 'Toys & Fun', 'Books', 'Movies']
sources = ['Amazon', 'Walmart', 'Best Buy', 'Target']
badges = ['HOT', 'NEW', 'SALE', 'VIRAL', 'BEST SELLER', 'CHEAP']

images = {
    'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80',
    'Home': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    'Fashion': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
    'Beauty': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80',
    'Food': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    'Toys & Fun': 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80',
    'Books': 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
    'Movies': 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
}

def gen_title(cat, i):
    prefixes = ['Premium', 'Deluxe', 'Essential', 'Smart', 'Classic', 'Modern', 'Ultra']
    nouns = {
        'Electronics': ['Headphones', 'Laptop', 'Smartphone', 'Tablet', 'Monitor', 'Speaker', 'Camera'],
        'Home': ['Vacuum', 'Blender', 'Coffee Maker', 'Desk', 'Chair', 'Lamp', 'Bed Frame'],
        'Fashion': ['Jacket', 'Sneakers', 'Watch', 'Sunglasses', 'Backpack', 'Jeans', 'T-Shirt'],
        'Beauty': ['Serum', 'Moisturizer', 'Perfume', 'Makeup Set', 'Hair Dryer', 'Trimmer', 'Lotion'],
        'Food': ['Coffee Beans', 'Snack Box', 'Chocolate Truffles', 'Tea Set', 'Olive Oil', 'Protein Powder', 'Spices'],
        'Toys & Fun': ['Board Game', 'Action Figure', 'RC Car', 'Puzzle', 'Building Blocks', 'Doll', 'Drone'],
        'Books': ['Mystery Novel', 'Sci-Fi Epic', 'Biography', 'Cookbook', 'Self-Help Guide', 'Fantasy Series', 'History Book'],
        'Movies': ['Action Blockbuster', 'Classic Drama', 'Sci-Fi Thriller', 'Comedy Special', 'Horror Collection', 'Documentary', 'Animated Feature']
    }
    return f"{random.choice(prefixes)} {random.choice(nouns[cat])} Collection {i}"

products = []
digital_products = []

id_counter = 10000

for cat in categories:
    for i in range(1, 105):
        price = round(random.uniform(10.0, 299.99), 2)
        orig_price = round(price * random.uniform(1.2, 2.0), 2)
        
        products.append({
            "id": id_counter,
            "title": gen_title(cat, i) + f" - ${price}",
            "category": cat,
            "source": random.choice(sources),
            "price": f"${price}",
            "originalPrice": f"${orig_price}",
            "image": images[cat],
            "link": "https://www.amazon.com/s?k=" + cat.replace(' ', '+') + "&tag=teknest2026-20",
            "badge": random.choice(badges)
        })
        id_counter += 1

js_content = "const digitalProducts = [\n"
js_content += "    {\n        id: 1,\n        title: \"Ultimate Passive Income Guide 2026\",\n        category: \"Digital\",\n        price: 19.99,\n        image: \"https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80\",\n        link: \"https://paypal.me/teknest.org2026\",\n        badge: \"Best Seller\"\n    }\n];\n\n"
js_content += "const affiliateProducts = " + json.dumps(products, indent=4) + ";\n"

with open("/home/explode_420/Antigravity/passive-income-store/products.js", "w") as f:
    f.write(js_content)
