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

    # Keep hand-added affiliate entries: anything already in products.js
    # whose id is NOT in today's feed. The daily feed regenerates from
    # scratch, so without this step hand-added deals would be wiped
    # every run. Entries whose id IS in the feed are refreshed from the
    # feed, so the feed always wins for deals it still carries.
    kept = []
    try:
        aff_start = content.find("const affiliateProducts = [")
        if aff_start != -1:
            aff_end = content.find("];", aff_start) + 2
            existing = json.loads(content[aff_start + len("const affiliateProducts = "):aff_end - 1])
            feed_ids = {d.get("id") for d in new_deals}
            seen = set()
            for entry in existing:
                eid = entry.get("id")
                if eid is not None and eid not in feed_ids and eid not in seen:
                    seen.add(eid)
                    kept.append(entry)
            if kept:
                print(f"Keeping {len(kept)} hand-added deal(s) not in today's feed.")
    except Exception as e:
        print(f"Warning: could not read existing affiliate deals ({e}); writing feed deals only.")
        kept = []

    # Hand-added deals lead, then today's feed deals.
    merged_deals = kept + new_deals

    # Let's extract digitalProducts part (manual but simple for this demo)
    digital_start = content.find("const digitalProducts = [")
    digital_end = content.find("];", digital_start) + 2
    digital_part = content[digital_start:digital_end]

    new_affiliate_js = f"const affiliateProducts = {json.dumps(merged_deals, indent=4)};"

    final_content = f"{digital_part}\n\n{new_affiliate_js}\n\nconst allProducts = [...digitalProducts, ...affiliateProducts];"

    with open(products_js_path, "w") as f:
        f.write(final_content)
    print("Successfully updated products.js with fresh deals.")

if __name__ == "__main__":
    update_products()
