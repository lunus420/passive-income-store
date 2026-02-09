import json
import os
import random

STORE_URL = "https://lunus420.github.io/passive-income-store/"

PROMO_TEMPLATES = [
    "🔥 TODAY'S TOP GLOBAL DEALS ARE IN! 🔥",
    "🚀 NEW DEALS JUST DROPPED! 🚀",
    "💰 START SAVING NOW: TODAY'S HIGHLIGHTS 💰"
]

def generate_social_post():
    base_dir = os.path.dirname(__file__)
    enhanced_path = os.path.join(base_dir, "enhanced_deals.json")
    post_path = os.path.join(base_dir, "daily_post.txt")
    
    if not os.path.exists(enhanced_path):
        print("No enhanced deals found to post.")
        return

    with open(enhanced_path, "r") as f:
        deals = json.load(f)

    if not deals:
        print("Empty deals list.")
        return

    # Take top 3 deals
    top_deals = deals[:3]
    
    header = random.choice(PROMO_TEMPLATES)
    
    post_lines = [header, ""]
    
    for i, deal in enumerate(top_deals, 1):
        title = deal.get('title', 'Great Deal')
        link = deal.get('link', '#')
        # Simple formatting: "1. Must-Have: Title"
        post_lines.append(f"{i}. {title}")
        post_lines.append(f"👉 Grab it here: {link}")
        post_lines.append("")

    post_lines.append(f"Check out the full store for more: {STORE_URL}")
    post_lines.append("#PassiveIncome #Deals #Shopping #Automation")
    
    post_content = "\n".join(post_lines)
    
    with open(post_path, "w") as f:
        f.write(post_content)
    
    print(f"Daily post generated at {post_path}")
    print("-" * 30)
    print(post_content)
    print("-" * 30)

if __name__ == "__main__":
    print("🤖 Social Media Promoter v2.0 Starting...")
    generate_social_post()
    print("✅ Promotion Update Complete!")
