import json
import os
import random
import re

ADJECTIVES = ["Epic", "Insane", "Unbeatable", "Must-Have", "Viral", "Premium", "Exclusive", "Savage", "Brutal", "Elite", "Legendary", "Extreme"]

# --- CATEGORY MAP (fixed 2026-07-03) ---
# Categories now match the site's actual filter button labels exactly:
# 'Tech', 'Home & Kitchen', 'Fashion', 'Beauty & Health', 'Food & Grocery', 'Toys & Fun'
# (previously stored as 'Electronics'/'Home'/'Food'/'Beauty', which never matched any
# filter button since filterProducts() does an exact string match — most products were
# invisible under every filter except "All").
#
# STRONG keywords decide the category outright. WEAK keywords (generic accessory words
# like "battery"/"charger") only apply if nothing STRONG matched anywhere else — this
# fixes items like a power drill getting tagged "Electronics" just because the title
# also mentions "battery" and "charger".

STRONG_PATTERNS = {
    "Tech": re.compile(
        r"\b(laptop|computer|chromebook|macbook|monitor|tv|television|iphone|samsung galaxy|android|"
        r"tablet|ipad|headphone|earbud|airpod|soundbar|gopro|drone|gpu|cpu|ssd|ram|keyboard|mouse|"
        r"router|modem|smartwatch|fitbit|apple watch|xbox|playstation|ps5|nintendo|switch pro controller|"
        r"handheld gaming|gaming console|game console|video ?game|controller|projector|alienware|"
        r"motherboard|hard drive|flash drive|graphics card|processor|oled|qled|4k|webcam|pixel|oneplus|"
        r"hyperkin|desktop|mini pc|ryzen|core i[3579]|imac|\bdell\b|\blenovo\b|3d printer|record player|"
        r"turntable|smart lock|cell phone|\b5g\b|temu electronics|charging station|charging|aura frames|"
        r"fingerprint.*lock|gaming (pc|desktop)|master ?&? ?dynamic|mh40|geekom|bosgame|kamrui)\b",
        re.I,
    ),
    "Home & Kitchen": re.compile(
        r"\b(mattress|pillow|blanket|sheets?|towel|curtain|rug|vacuum|dustbuster|crosswave|hydro ?scrub|"
        r"mop|dishwasher|microwave|oven|toaster|blender|coffee maker|air fryer|instant pot|cookware|"
        r"drills?|screwdriver|wrenche?s?|hammers?|saws?|sander|spreader|gazebo|lawn|mow(?:er|ing)?|hose|"
        r"sprinkler|patio|grill|furniture|desks?|chairs?|shelf|shelves|lamps?|light bulb|air purifier|"
        r"humidifier|dehumidifier|carpet cleaner|liner|notebook|spiral|grinder|torch|air compressor|"
        r"tool ?set|toolbox|thatch rake|garage light|flashlight|fishing line|smoker kit|tire inflator|"
        r"composter|whiskey smoker|toilet|knife)\b",
        re.I,
    ),
    "Fashion": re.compile(
        r"\b(jackets?|coats?|hoodie|sweater|shirts?|jeans?|pants?|shorts?|dress(?:es)?|skirts?|suits?|"
        r"shoes?|sneaker|boots?|sandal|hats?|caps?|beanie|scarv?e?s?|gloves?|belts?|sunglasses|jewelry|"
        r"necklace|bracelet|backpack|purse|luggage|parka|blazer|tank|cropped|fleece|apparel|denim|jegging|"
        r"topcoat|j\.?\s?crew|janie and jack|life is good|eddie bauer|keychain)\b",
        re.I,
    ),
    "Beauty & Health": re.compile(
        r"\b(skincare|moisturiz\w*|serum|sunscreen|spf|lotion|shampoo|conditioner|makeup|cosmetic|lipstick|"
        r"mascara|perfume|cologne|fragrance|deodorant|hair dryer|straightener|trimmer|razor|shaver|"
        r"toothbrush|dental|floss|dentek|l.?oreal|eau de toilette)\b",
        re.I,
    ),
    "Food & Grocery": re.compile(
        r"\b(snacks?|candy|chocolate|cookies?|chips?|coffee|tea|soda|juice|energy drink|protein|"
        r"supplement|vitamin|grocery|seasoning|spice|clif bar|buffalo wild wings|white castle|kfc|subway|"
        r"chipotle|sliders?|entree|wings?|footlong)\b",
        re.I,
    ),
    "Toys & Fun": re.compile(
        r"\b(toys?|lego|puzzle|board game|plush|action figure|doll|giveaway|sweepstakes|daily draw)\b",
        re.I,
    ),
}

WEAK_TECH = re.compile(r"\b(battery|charger|cable|adapter|bluetooth|wifi|usb|power ?bank|solar|inverter)\b", re.I)

CATEGORY_ORDER = ["Tech", "Home & Kitchen", "Fashion", "Beauty & Health", "Food & Grocery", "Toys & Fun"]


def categorize_product(title):
    """Categorize a product based on its title. Category names match the site's
    filter button labels exactly so products actually show up when filtered."""
    for category in CATEGORY_ORDER:
        if STRONG_PATTERNS[category].search(title):
            return category
    if WEAK_TECH.search(title):
        return "Tech"
    return "Other"


# --- PLACEHOLDER IMAGES ---
# Generated stock-style photos, one per sub-type, used only when a deal has no real
# product image of its own. Picking by sub-type (not one photo per broad category)
# avoids every "Tech" item with no photo looking identical.
PLACEHOLDERS = {
    "tech": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/634adaf28_generated_image.png",
    "gaming": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/9bd0fb41b_generated_image.png",
    "home": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/db76a2f0d_generated_image.png",
    "mattress": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/a5a55d26e_generated_image.png",
    "tools": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/3eb0f4921_generated_image.png",
    "fashion": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/108234b53_generated_image.png",
    "shoes": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ea27babaf_generated_image.png",
    "beauty": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/33a9ef1d5_generated_image.png",
    "food": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/d32f1a159_generated_image.png",
    "toys": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/ac0310018_generated_image.png",
    "sale": "https://media.base44.com/images/public/6a477d0a1f5ba6a40fc0b08e/4d9de39ba_generated_image.png",
}


def pick_placeholder(title, category):
    t = title.lower()
    if re.search(r"xbox|playstation|nintendo|controller|handheld gaming|video ?game|console", t):
        return PLACEHOLDERS["gaming"]
    if re.search(r"\blego\b", t):
        return PLACEHOLDERS["toys"]
    if re.search(r"mattress", t):
        return PLACEHOLDERS["mattress"]
    if re.search(r"\bdrill|sander|spreader|gazebo|carpet cleaner|wrench|hammer|\bsaw\b", t):
        return PLACEHOLDERS["tools"]
    if re.search(r"sneaker|\bshoe|\bboot", t):
        return PLACEHOLDERS["shoes"]
    return {
        "Tech": PLACEHOLDERS["tech"],
        "Home & Kitchen": PLACEHOLDERS["home"],
        "Fashion": PLACEHOLDERS["fashion"],
        "Beauty & Health": PLACEHOLDERS["beauty"],
        "Food & Grocery": PLACEHOLDERS["food"],
        "Toys & Fun": PLACEHOLDERS["toys"],
    }.get(category, PLACEHOLDERS["sale"])


def upscale_if_dealnews(url):
    """DealNews/FatWallet CDN thumbnails are cropped tiny via ?h=&w= query params —
    stripping them returns the full-resolution original image."""
    if url and "dlnws.com" in url:
        return re.sub(r"[?&](h|w)=\d+", "", url)
    return url


def extract_price(title):
    match = re.search(r"\$[\d,]+(?:\.\d{2})?", title)
    return match.group(0) if match else "Check Deal"


def enhance_deal(deal):
    adj = random.choice(ADJECTIVES)

    title = deal["title"]
    if not any(title.startswith(a) for a in ADJECTIVES):
        title = f"{adj}: {title}"

    category = categorize_product(title)
    price = extract_price(title)

    badge = deal["badge"]
    source_lower = deal["source"].lower()
    if "temu.com" in deal["link"] or "temu" in title.lower() or source_lower == "temu":
        badge = "TEMU DEAL"
    elif any(s in source_lower for s in ["b&h", "newegg", "techradar", "bh photo"]):
        badge = "LEGIT TECH"
    elif "amazon" in source_lower:
        badge = "AMAZON DEAL"

    image = deal.get("image")
    if not image:
        image = pick_placeholder(title, category)
    else:
        image = upscale_if_dealnews(image)

    return {
        "id": random.randint(1000, 9999),
        "title": title,
        "category": category,
        "source": deal["source"],
        "price": price,
        "originalPrice": "---",
        "image": image,
        "link": deal["link"],
        "badge": deal["badge"],
    }


def deduplicate(deals):
    seen_titles = set()
    unique_deals = []
    for deal in deals:
        norm = deal["title"].lower().strip()
        for adj in [a.lower() + ": " for a in ADJECTIVES]:
            if norm.startswith(adj):
                norm = norm[len(adj):]
                break
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

    random.shuffle(deals)
    enhanced_deals = [enhance_deal(d) for d in deals[:200]]
    enhanced_deals = deduplicate(enhanced_deals)

    cats = {}
    for d in enhanced_deals:
        cats[d["category"]] = cats.get(d["category"], 0) + 1
    print(f"Category breakdown: {cats}")

    with open(enhanced_path, "w") as f:
        json.dump(enhanced_deals, f, indent=4)
    print(f"Enhanced {len(enhanced_deals)} unique deals (from {len(deals)} raw).")


if __name__ == "__main__":
    process_deals()
