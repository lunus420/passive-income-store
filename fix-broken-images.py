#!/usr/bin/env python3
"""
Fix broken/blank product images and add more affordable products
"""

import json
import re

# Read current products
with open('products.js', 'r') as f:
    content = f.read()

# Fallback images for broken ones
fallback_images = {
    "Electronics": [
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1527864550417-7fd9fc2417af?auto=format&fit=crop&w=600&q=80"
    ],
    "Home": [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80"
    ],
    "Food": [
        "https://images.unsplash.com/photo-1494475510638-8cd1c9b7edfe?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1599503926544-7dc89eb4d4a5?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab0467?auto=format&fit=crop&w=600&q=80"
    ],
    "Fashion": [
        "https://images.unsplash.com/photo-1551698618-494ae0085b4b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469334933652-a54485709ff1?auto=format&fit=crop&w=600&q=80"
    ],
    "Beauty": [
        "https://images.unsplash.com/photo-1522337360788-8b13dee73837?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1596462502278-27d4435d6285?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1570292629237-7d426e6a9a3c?auto=format&fit=crop&w=600&q=80"
    ],
    "Toys & Fun": [
        "https://images.unsplash.com/photo-1596487131256-241721296dbb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517486808950-2e325a9c94e5?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1607342666198-7846b4b5db85?auto=format&fit=crop&w=600&q=80"
    ]
}

def fix_broken_images():
    """Replace broken/blank images with working ones"""
    print("Fixing broken images...")
    
    # Find affiliate products section
    affiliate_start = content.find('const affiliateProducts = [')
    if affiliate_start == -1:
        print("Could not find affiliate products section")
        return
    
    # Find end of array
    bracket_count = 0
    end_pos = affiliate_start
    for i, char in enumerate(content[affiliate_start:], affiliate_start):
        if char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
            if bracket_count == 0:
                end_pos = i + 1
                break
    
    affiliate_section = content[affiliate_start:end_pos]
    
    # Fix broken images
    lines = affiliate_section.split('\n')
    for i, line in enumerate(lines):
        if '"image":' in line:
            # Check for broken/blank images
            if 'null' in line or '""' in line or 'datocms-assets.com' in line and 'dn-image' in line:
                # Look for category in previous lines
                category = "Electronics"  # default
                for j in range(max(0, i-5), i):
                    if '"category":' in lines[j]:
                        cat_match = re.search(r'"category":\s*"([^"]+)"', lines[j])
                        if cat_match:
                            category = cat_match.group(1)
                        break
                
                # Get fallback image
                import random
                fallback_img = random.choice(fallback_images.get(category, fallback_images["Electronics"]))
                
                # Replace the broken image
                lines[i] = re.sub(r'"image":\s*[^,}]*', f'"image": "{fallback_img}"', line)
                print(f"Fixed broken image for {category}")
    
    return content[:affiliate_start] + '\n'.join(lines) + content[end_pos:]

def add_affordable_products():
    """Add more affordable products to existing categories"""
    affordable_products = [
        # Affordable Tech
        {
            "id": 9999,
            "title": "Budget: Anker PowerCore 10000 Portable Charger $12",
            "category": "Electronics", 
            "source": "Amazon Deal",
            "price": "$12",
            "originalPrice": "$25",
            "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
            "link": "https://www.amazon.com/s?k=anker+powercore&tag=bigterry20036-20",
            "badge": "BUDGET"
        },
        {
            "id": 9998,
            "title": "Affordable: JBL Tune 500BT Wireless Headphones $25",
            "category": "Electronics",
            "source": "Amazon Deal", 
            "price": "$25",
            "originalPrice": "$50",
            "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
            "link": "https://www.amazon.com/s?k=jbl+headphones&tag=bigterry20036-20",
            "badge": "SALE"
        },
        {
            "id": 9997,
            "title": "Budget: Logitech M185 Wireless Mouse $8",
            "category": "Electronics",
            "source": "Amazon Deal",
            "price": "$8", 
            "originalPrice": "$20",
            "image": "https://images.unsplash.com/photo-1527864550417-7fd9fc2417af?auto=format&fit=crop&w=600&q=80",
            "link": "https://www.amazon.com/s?k=logitech+mouse&tag=bigterry20036-20",
            "badge": "BUDGET"
        },
        {
            "id": 9996,
            "title": "Cheap: SanDisk 64GB USB Flash Drive $6",
            "category": "Electronics",
            "source": "Amazon Deal",
            "price": "$6",
            "originalPrice": "$15", 
            "image": "https://images.unsplash.com/photo-1517486808950-2e325a9c94e5?auto=format&fit=crop&w=600&q=80",
            "link": "https://www.amazon.com/s?k=sandisk+usb&tag=bigterry20036-20",
            "badge": "CHEAP"
        },
        
        # Lifestyle/Home (more affordable)
        {
            "id": 9995,
            "title": "Budget: Mainstays Basic Kitchen Knife Set $15",
            "category": "Home",
            "source": "Walmart Deal",
            "price": "$15",
            "originalPrice": "$30",
            "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
            "link": "https://www.walmart.com/s?k=kitchen+knife+set",
            "badge": "BUDGET"
        },
        {
            "id": 9994,
            "title": "Affordable: Utopia Bedding Set - Twin $20",
            "category": "Home", 
            "source": "Amazon Deal",
            "price": "$20",
            "originalPrice": "$45",
            "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
            "link": "https://www.amazon.com/s?k=bedding+set&tag=bigterry20036-20",
            "badge": "SALE"
        },
        {
            "id": 9993,
            "title": "Cheap: Rubbermaid Food Storage Containers $8",
            "category": "Home",
            "source": "Target Deal",
            "price": "$8",
            "originalPrice": "$20",
            "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80", 
            "link": "https://www.target.com/s?search=food+storage",
            "badge": "CHEAP"
        },
        {
            "id": 9992,
            "title": "Budget: Black+Decker Toaster Oven $25",
            "category": "Home",
            "source": "Amazon Deal",
            "price": "$25",
            "originalPrice": "$50",
            "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
            "link": "https://www.amazon.com/s?k=toaster+oven&tag=bigterry20036-20",
            "badge": "BUDGET"
        }
    ]
    
    # Convert to JSON string
    products_json = json.dumps(affordable_products, indent=4)
    
    # Insert before closing bracket of affiliateProducts
    closing_bracket = content.rfind('];')
    if closing_bracket == -1:
        print("Could not find closing bracket")
        return content
    
    # Insert new products before the closing
    updated_content = content[:closing_bracket] + ',\n' + products_json + '\n' + content[closing_bracket:]
    
    return updated_content

# Apply fixes
updated_content = fix_broken_images()
updated_content = add_affordable_products()

# Write back
with open('products.js', 'w') as f:
    f.write(updated_content)

print("✅ Fixed broken images and added affordable products!")
print("📊 Added 8 new budget-friendly items")
print("🎯 Categories: Electronics (4), Home (4)")
