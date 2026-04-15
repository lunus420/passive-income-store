#!/usr/bin/env python3
"""
Filter deals to keep only those with real product images (not generic Unsplash)
"""

import json

def has_real_image(deal):
    """Check if deal has a real product image vs generic stock photo"""
    image = deal.get("image", "")
    
    # Keep images from these domains (real product photos)
    real_image_domains = [
        "d.dlnws.com",  # DealNews product images
        "images-na.ssl-images-amazon.com",  # Amazon product images
        "ssl-images-amazon.com",
        "cloudfront.net",
        "shopify.com",
        "cdn.shopify.com",
    ]
    
    # Filter out generic stock photo sites
    stock_photo_sites = [
        "images.unsplash.com",
        "unsplash.com",
        "stock.adobe.com",
        "gettyimages.com",
    ]
    
    # If it's a real product image domain, keep it
    for domain in real_image_domains:
        if domain in image:
            return True
    
    # If it's a stock photo site, filter it out
    for site in stock_photo_sites:
        if site in image:
            return False
    
    # If image contains actual product keywords in filename, might be real
    if any(x in image.lower() for x in ["product", "item", "detail", "main", "thumb"]):
        return True
    
    # Default: filter out unknown images
    return False

# Load enhanced deals
with open('/home/explode_420/Antigravity/passive-income-store/automation/enhanced_deals.json', 'r') as f:
    deals = json.load(f)

# Filter to keep only real images
real_deals = [d for d in deals if has_real_image(d)]

print(f"Original: {len(deals)} deals")
print(f"Filtered: {len(real_deals)} deals with real product images")
print(f"Removed: {len(deals) - len(real_deals)} deals with generic images")

# Save filtered deals
with open('/home/explode_420/Antigravity/passive-income-store/automation/enhanced_deals.json', 'w') as f:
    json.dump(real_deals, f, indent=2)

print("Saved filtered deals to enhanced_deals.json")
