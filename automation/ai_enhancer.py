import json
import os
import random
import re

ADJECTIVES = ["Epic", "Insane", "Unbeatable", "Must-Have", "Viral", "Premium", "Exclusive", "Savage", "Brutal", "Elite", "Legendary", "Extreme"]

# --- COMPREHENSIVE CATEGORY MAP ---
# Each category has a list of keywords. First match wins (order matters).
CATEGORY_KEYWORDS = {
    "Electronics": [
        "laptop", "computer", "pc", "monitor", "tv", "television", "phone", "iphone",
        "samsung galaxy", "android", "tablet", "ipad", "headphone", "earbud", "airpod",
        "speaker", "soundbar", "camera", "gopro", "drone", "gpu", "cpu", "ssd", "ram",
        "keyboard", "mouse", "router", "modem", "wifi", "bluetooth", "usb", "charger",
        "power bank", "battery", "cable", "adapter", "smartwatch", "fitbit", "apple watch",
        "gaming", "xbox", "playstation", "ps5", "nintendo", "switch", "controller",
        "projector", "chromebook", "macbook", "alienware", "dell", "lenovo", "hp ",
        "asus", "acer", "intel", "amd", "nvidia", "geforce", "rtx", "hdmi",
        "streaming", "roku", "fire stick", "chromecast", "smart tv", "oled", "qled",
        "vr ", "quest", "pixel", "motorola", "oneplus", "flip", "fold",
        "case fan", "power supply", "motherboard", "hard drive", "flash drive",
        "surge protector", "power strip", "inverter", "solar", "lifepo4",
        "fm transmitter", "radio transmitter", "tv box", "android box",
    ],
    "Home": [
        "home", "kitchen", "lamp", "light", "bulb", "furniture", "desk", "chair",
        "mattress", "pillow", "blanket", "sheet", "towel", "curtain", "rug",
        "vacuum", "mop", "cleaning", "laundry", "detergent", "tide", "dryer",
        "dishwasher", "microwave", "oven", "toaster", "blender", "coffee maker",
        "espresso", "air fryer", "instant pot", "cookware", "pan", "pot",
        "garden", "lawn", "mower", "hose", "sprinkler", "patio", "grill",
        "bbq", "outdoor", "compost", "planter", "soil", "seed",
        "tool", "drill", "screwdriver", "wrench", "hammer", "saw",
        "paint", "shelf", "storage", "organizer", "basket", "bin",
        "mirror", "bathroom", "shower", "faucet", "toilet",
        "candle", "diffuser", "air purifier", "humidifier", "dehumidifier",
        "fan ", "heater", "thermostat", "nest", "ring doorbell", "security camera",
        "smoke detector", "fire extinguisher", "safe", "lock",
        "paracord", "rope", "spotlight", "landscape",
    ],
    "Fashion": [
        "jacket", "coat", "hoodie", "sweater", "shirt", "t-shirt", "polo",
        "jeans", "pants", "shorts", "dress", "skirt", "suit",
        "shoes", "sneakers", "boots", "sandals", "slipper",
        "hat", "cap", "beanie", "scarf", "glove", "belt", "wallet",
        "sunglasses", "watch", "jewelry", "necklace", "bracelet", "ring",
        "backpack", "bag", "purse", "luggage", "suitcase", "travel bag",
        "north face", "patagonia", "nike", "adidas", "puma", "under armour",
        "levi", "ralph lauren", "calvin klein",
        "shoe bag", "drawstring bag",
    ],
    "Beauty": [
        "beauty", "skincare", "skin care", "moisturizer", "cream", "serum",
        "sunscreen", "spf", "lotion", "body wash", "shampoo", "conditioner",
        "makeup", "cosmetic", "lipstick", "mascara", "foundation", "concealer",
        "perfume", "cologne", "fragrance", "deodorant",
        "hair dryer", "straightener", "curling iron", "trimmer", "razor", "shaver",
        "toothbrush", "electric toothbrush", "oral", "dental",
        "cerave", "neutrogena", "olay", "nivea", "dove",
    ],
    "Food": [
        "food", "snack", "candy", "chocolate", "cookie", "chip",
        "drink", "coffee", "tea", "water", "soda", "juice", "energy drink",
        "protein", "supplement", "vitamin", "mineral",
        "grocery", "organic", "salmon", "tuna", "chicken", "beef",
        "sauce", "seasoning", "spice", "oil", "vinegar",
        "pet food", "dog food", "cat food", "treats", "friskies", "purina",
        "mentos", "mints", "gum",
        "bumble bee", "canned",
    ],
    "Toys & Fun": [
        "toy", "lego", "puzzle", "board game", "card game",
        "plush", "stuffed", "squishmallow", "action figure", "doll",
        "guitar", "instrument", "fender", "piano", "drum",
        "book", "kindle", "audiobook",
        "giveaway", "sweepstakes", "contest", "daily draw",
        "analog", "focus kit", "cards", "dot grid", "notebook", "journal",
    ],
    "Books": [
        "hardcover", "paperback", "biography", "memoir", "fiction", "novel",
        "non-fiction", "cookbooks", "comic", "manga", "educational", "textbook"
    ],
    "Movies": [
        "blu-ray", "dvd", "digital movie", "4k ultra hd", "movie collection",
        "cinema", "theatrical", "series box set"
    ],
}

def categorize_product(title):
    """Categorize a product based on its title using keyword matching."""
    title_lower = title.lower()
    for category, keywords in CATEGORY_KEYWORDS.items():
        for keyword in keywords:
            if keyword in title_lower:
                return category
    return "Other"

def extract_price(title):
    """Try to extract a dollar price from the title."""
    # Match patterns like $14.99, $1,000, $269
    match = re.search(r'\$[\d,]+(?:\.\d{2})?', title)
    if match:
        return match.group(0)
    return "Check Deal"

def enhance_deal(deal):
    adj = random.choice(ADJECTIVES)
    
    title = deal["title"]
    if not any(title.startswith(a) for a in ADJECTIVES):
        title = f"{adj}: {title}"
    
    # Smart categorization
    category = categorize_product(title)
    
    # Extract real price from title
    price = extract_price(title)
    
    # Specific Badge handling
    badge = deal["badge"]
    source_lower = deal["source"].lower()
    if "temu.com" in deal["link"] or "temu" in title.lower() or source_lower == "temu":
        badge = "TEMU DEAL"
        if category == "Other":
            # Temu often has home/gadget stuff, try to re-poke Home if it's Temu
            if any(k in title.lower() for k in ["organizer", "rack", "tool", "kitchen", "led"]):
                category = "Home"
    elif any(s in source_lower for s in ["b&h", "newegg", "techradar", "bh photo"]):
        badge = "LEGIT TECH"
    elif "amazon" in source_lower:
        badge = "AMAZON DEAL"
    image = deal.get("image")
    if not image:
        category_placeholders = {
            "Electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
            "Home": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
            "Fashion": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
            "Beauty": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
            "Food": "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=600&q=80",
            "Toys & Fun": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
            "Other": "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
        }
        image = category_placeholders.get(category, category_placeholders["Other"])

    return {
        "id": random.randint(1000, 9999),
        "title": title,
        "category": category,
        "source": deal["source"],
        "price": price,
        "originalPrice": "---",
        "image": image,
        "link": deal["link"],
        "badge": deal["badge"]
    }

def deduplicate(deals):
    """Remove duplicate deals based on normalized title similarity."""
    seen_titles = set()
    unique_deals = []
    for deal in deals:
        # Normalize: lowercase, strip adjective prefix, strip whitespace
        norm = deal["title"].lower().strip()
        for adj in [a.lower() + ": " for a in ADJECTIVES]:
            if norm.startswith(adj):
                norm = norm[len(adj):]
                break
        # Use first 60 chars as a "fingerprint" to catch near-dupes
        fingerprint = norm[:60]
        if fingerprint not in seen_titles:
            seen_titles.add(fingerprint)
            unique_deals.append(deal)
    return unique_deals

def process_deals():
    raw_path = os.path.join(os.path.dirname(__file__), "raw_deals.json")
    enhanced_path = os.path.join(os.path.dirname(__file__), "enhanced_deals.json")
    
    if not os.path.exists(raw_path):
        print("No raw deals found.")
        return
        
    with open(raw_path, "r") as f:
        deals = json.load(f)
        
    # Shuffle to ensure variety
    random.shuffle(deals)
    enhanced_deals = [enhance_deal(d) for d in deals[:200]]
    
    # Remove duplicates
    enhanced_deals = deduplicate(enhanced_deals)
    
    # Print category breakdown
    cats = {}
    for d in enhanced_deals:
        cats[d["category"]] = cats.get(d["category"], 0) + 1
    print(f"Category breakdown: {cats}")
    
    with open(enhanced_path, "w") as f:
        json.dump(enhanced_deals, f, indent=4)
    print(f"Enhanced {len(enhanced_deals)} unique deals (from {len(deals)} raw).")

if __name__ == "__main__":
    process_deals()
