import json
import os

def update_products():
    base_dir = os.path.dirname(os.path.dirname(__file__))
    enhanced_path = os.path.join(os.path.dirname(__file__), "enhanced_deals.json")
    products_js_path = os.path.join(base_dir, "products.js")
    
    if not os.path.exists(enhanced_path):
        print("No enhanced deals found.")
        return
        
    with open(enhanced_path, "r") as f:
        new_deals = json.load(f)
        
    # Read existing products.js
    with open(products_js_path, "r") as f:
        content = f.read()
        
    # We need to find the affiliateProducts array and update it.
    # For a robust solution, we'll replace the whole affiliateProducts section 
    # or just append to it. 
    # For "easy money" automation, we'll maintain the digital products but update affiliate.
    
    # Let's extract digitalProducts part (manual but simple for this demo)
    digital_start = content.find("const digitalProducts = [")
    digital_end = content.find("];", digital_start) + 2
    digital_part = content[digital_start:digital_end]
    
    new_affiliate_js = f"const affiliateProducts = {json.dumps(new_deals, indent=4)};"
    
    final_content = f"{digital_part}\n\n{new_affiliate_js}\n\nconst allProducts = [...digitalProducts, ...affiliateProducts];"
    
    with open(products_js_path, "w") as f:
        f.write(final_content)
    print("Successfully updated products.js with fresh deals.")

if __name__ == "__main__":
    update_products()
