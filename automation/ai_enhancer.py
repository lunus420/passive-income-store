import json
import os
import random

# For now, we use a rule-based enhancer to mimic "AI" behavior 
# unless a local model is explicitly used.
# Since we want "easy money", we'll make descriptions punchy.

ADJECTIVES = ["Epic", "Insane", "Unbeatable", "Must-Have", "Viral", "Premium", "Exclusive"]
CTA_PHRASES = ["Don't miss out!", "Grab it before it's gone.", "Absolute steal!", "Limited time offer.", "Upgrade your life today."]

def enhance_deal(deal):
    adj = random.choice(ADJECTIVES)
    cta = random.choice(CTA_PHRASES)
    
    # Simple formatting for store display
    title = deal["title"]
    if not title.startswith(adj):
        title = f"{adj}: {title}"
        
    enhanced_description = f"{deal['description'][:200]}... {cta}"
    
    # Assign category based on title keywords
    category = "Tech" # Default
    if any(k in title.lower() for k in ["home", "kitchen", "lamp", "desk"]):
        category = "Home"
    elif any(k in title.lower() for k in ["beauty", "skin", "makeup", "face"]):
        category = "Beauty"
        
    return {
        "id": random.randint(1000, 9999),
        "title": title,
        "category": category,
        "source": deal["source"],
        "price": "Check Site", # Extracting price from RSS is unreliable without better regex
        "originalPrice": "---",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80", # Placeholder
        "link": deal["link"],
        "badge": deal["badge"]
    }

def process_deals():
    raw_path = os.path.join(os.path.dirname(__file__), "raw_deals.json")
    enhanced_path = os.path.join(os.path.dirname(__file__), "enhanced_deals.json")
    
    if not os.path.exists(raw_path):
        print("No raw deals found.")
        return
        
    with open(raw_path, "r") as f:
        deals = json.load(f)
        
    enhanced_deals = [enhance_deal(d) for d in deals[:10]] # Take top 10
    
    with open(enhanced_path, "w") as f:
        json.dump(enhanced_deals, f, indent=4)
    print(f"Enhanced {len(enhanced_deals)} deals.")

if __name__ == "__main__":
    process_deals()
