#!/usr/bin/env python3
"""
Fix product images to be more relevant to actual products
"""

import json
import re

# Read current products
with open('products.js', 'r') as f:
    content = f.read()

# Better product-specific image mappings
image_mappings = {
    # Electronics
    "laptop": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    "desktop": "https://images.unsplash.com/photo-1517041897951-6262b49d9e1e?auto=format&fit=crop&w=600&q=80", 
    "mouse": "https://images.unsplash.com/photo-1527864550417-7fd9fc2417af?auto=format&fit=crop&w=600&q=80",
    "keyboard": "https://images.unsplash.com/photo-1518671019115-0a2c5c583b57?auto=format&fit=crop&w=600&q=80",
    "camera": "https://images.unsplash.com/photo-1516035069371-29a1b242ccaa?auto=format&fit=crop&w=600&q=80",
    "phone": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "speaker": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    "gaming": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    
    # Home & Garden
    "rug": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    "furniture": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    "desk": "https://images.unsplash.com/photo-1527864550417-7fd9fc2417af?auto=format&fit=crop&w=600&q=80",
    "chair": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    "mattress": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    "storage": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    "tools": "https://images.unsplash.com/photo-1581091226825-a6a7a70c0e1c?auto=format&fit=crop&w=600&q=80",
    "garden": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    "vacuum": "https://images.unsplash.com/photo-1581091226825-a6a7a70c0e1c?auto=format&fit=crop&w=600&q=80",
    "blender": "https://images.unsplash.com/photo-1532339412434-f8761a3ba9db?auto=format&fit=crop&w=600&q=80",
    "coffee": "https://images.unsplash.com/photo-1494475510638-8cd1c9b7edfe?auto=format&fit=crop&w=600&q=80",
    "air fryer": "https://images.unsplash.com/photo-1586900868435-24ae5e1c012b?auto=format&fit=crop&w=600&q=80",
    
    # Food & Kitchen
    "cookies": "https://images.unsplash.com/photo-1599503926544-7dc89eb4d4a5?auto=format&fit=crop&w=600&q=80",
    "cat food": "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80",
    "dog food": "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80",
    "coffee": "https://images.unsplash.com/photo-1494475510638-8cd1c9b7edfe?auto=format&fit=crop&w=600&q=80",
    "water": "https://images.unsplash.com/photo-1528378141225-c73a6d5b62f2?auto=format&fit=crop&w=600&q=80",
    "snacks": "https://images.unsplash.com/photo-1599503926544-7dc89eb4d4a5?auto=format&fit=crop&w=600&q=80",
    
    # Toys & Fun  
    "lego": "https://images.unsplash.com/photo-1596487131256-241721296dbb?auto=format&fit=crop&w=600&q=80",
    "toy": "https://images.unsplash.com/photo-1517486808950-2e325a9c94e5?auto=format&fit=crop&w=600&q=80",
    "game": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    
    # Fashion
    "jacket": "https://images.unsplash.com/photo-1551698618-494ae0085b4b?auto=format&fit=crop&w=600&q=80",
    "shirt": "https://images.unsplash.com/photo-1551698618-494ae0085b4b?auto=format&fit=crop&w=600&q=80",
    "hoodie": "https://images.unsplash.com/photo-1551698618-494ae0085b4b?auto=format&fit=crop&w=600&q=80",
    
    # Default generic images by category
    "Electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
    "Home": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80", 
    "Food": "https://images.unsplash.com/photo-1494475510638-8cd1c9b7edfe?auto=format&fit=crop&w=600&q=80",
    "Toys & Fun": "https://images.unsplash.com/photo-1596487131256-241721296dbb?auto=format&fit=crop&w=600&q=80",
    "Fashion": "https://images.unsplash.com/photo-1551698618-494ae0085b4b?auto=format&fit=crop&w=600&q=80",
    "Beauty": "https://images.unsplash.com/photo-1522337360788-8b13dee73837?auto=format&fit=crop&w=600&q=80"
}

def find_best_image(title, category):
    """Find the most relevant image for a product"""
    title_lower = title.lower()
    
    # Check for specific keywords in title
    for keyword, image_url in image_mappings.items():
        if keyword.lower() in title_lower:
            return image_url
    
    # Fall back to category-based image
    return image_mappings.get(category, "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80")

# Extract and update products
def update_products():
    # Find affiliate products section
    affiliate_start = content.find('const affiliateProducts = [')
    if affiliate_start == -1:
        print("Could not find affiliate products section")
        return
    
    # Find the end of the array
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
    
    # Replace images in affiliate products
    updated_section = affiliate_section
    lines = affiliate_section.split('\n')
    
    for i, line in enumerate(lines):
        if '"title":' in line:
            # Extract title
            title_match = re.search(r'"title":\s*"([^"]+)"', line)
            if title_match:
                title = title_match.group(1)
                
                # Look for category in next few lines
                category = "Other"
                for j in range(i+1, min(i+5, len(lines))):
                    if '"category":' in lines[j]:
                        cat_match = re.search(r'"category":\s*"([^"]+)"', lines[j])
                        if cat_match:
                            category = cat_match.group(1)
                        break
                
                # Find best image
                best_image = find_best_image(title, category)
                
                # Look for image line in next few lines and replace
                for j in range(i+1, min(i+10, len(lines))):
                    if '"image":' in lines[j]:
                        lines[j] = re.sub(r'"image":\s*"[^"]*"', f'"image": "{best_image}"', lines[j])
                        break
    
    updated_content = content[:affiliate_start] + '\n'.join(lines) + content[end_pos:]
    
    # Write back
    with open('products.js', 'w') as f:
        f.write(updated_content)
    
    print("✅ Updated product images with more relevant images!")

if __name__ == "__main__":
    update_products()
