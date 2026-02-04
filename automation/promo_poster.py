import json
import os
import random

def generate_social_post():
    base_dir = os.path.dirname(os.path.dirname(__file__))
    enhanced_path = os.path.join(os.path.dirname(__file__), "enhanced_deals.json")
    
    if not os.path.exists(enhanced_path):
        print("No enhanced deals found to promote.")
        return
        
    with open(enhanced_path, "r") as f:
        deals = json.load(f)
        
    if not deals:
        print("Deals list is empty.")
        return
        
    # Pick top 3 deals
    top_deals = deals[:3]
    
    intro_hooks = [
        "🔥 TODAY'S TOP GLOBAL DEALS ARE IN! 🔥",
        "💸 STOP OVERPAYING! Check these out:",
        "🚀 The automation just found these INSANE steals:",
        "👀 You won't believe these prices. Fresh from the web:"
    ]
    
    post_content = f"{random.choice(intro_hooks)}\n\n"
    
    for i, deal in enumerate(top_deals, 1):
        post_content += f"{i}. {deal['title']}\n"
        post_content += f"👉 Grab it here: {deal['link']}\n\n"
        
    post_content += "Check out the full store for more: [YOUR_STORE_URL_HERE]\n"
    post_content += "#PassiveIncome #Deals #Shopping #Automation"
    
    print("--- GENERATED SOCIAL POST ---")
    print(post_content)
    print("-----------------------------")
    
    # Save to a file for easy copying
    with open(os.path.join(os.path.dirname(__file__), "daily_post.txt"), "w") as f:
        f.write(post_content)
    print("Post saved to daily_post.txt")

if __name__ == "__main__":
    generate_social_post()
