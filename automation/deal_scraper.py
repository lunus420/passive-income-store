import requests
import xml.etree.ElementTree as ET
import json
import os
import random

# Sources for deals (RSS feeds)
SOURCES = [
    {"name": "Slickdeals", "url": "https://slickdeals.net/newsearch.php?mode=frontpage&searcharea=deals&searchin=first&rss=1"},
    {"name": "DealNews Tech", "url": "https://www.dealnews.com/c142/Tech-Gadgets/?rss=1"},
    {"name": "DealNews Home", "url": "https://www.dealnews.com/c49/Home-Garden/?rss=1"},
    {"name": "Woot Electronics", "url": "https://www.woot.com/blog/feed/electronics"},
    {"name": "Woot Home", "url": "https://www.woot.com/blog/feed/home-kitchen"}
]

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
]

# Affiliate Tags (YOUR IDs)
# Update these with your real IDs to make money!
AFFILIATE_TAGS = {
    "amazon": "bigterry20036-20",
    "temu": "alg041956",
    "ebay": "4tima",
    "default": "money_maker_2026"
}

def append_affiliate_tag(url):
    if not url or url == "#":
        return url
    
    # Simple tag appending logic
    separator = "&" if "?" in url else "?"
    
    if "amazon.com" in url:
        return f"{url}{separator}tag={AFFILIATE_TAGS['amazon']}"
    elif "temu.com" in url:
        return f"{url}{separator}affiliate_id={AFFILIATE_TAGS['temu']}"
    else:
        return f"{url}{separator}ref={AFFILIATE_TAGS['default']}"

def get_deals():
    all_deals = []
    
    for source in SOURCES:
        try:
            headers = {"User-Agent": random.choice(USER_AGENTS)}
            response = requests.get(source["url"], headers=headers, timeout=10)
            if response.status_code != 200:
                print(f"Failed to fetch {source['name']}: {response.status_code}")
                continue
                
            root = ET.fromstring(response.content)
            # Define namespaces for media content if present
            ns = {'media': 'http://search.yahoo.com/mrss/'}
            
            for item in root.findall(".//item"):
                title = item.find("title").text if item.find("title") is not None else "No Title"
                raw_link = item.find("link").text if item.find("link") is not None else "#"
                link = append_affiliate_tag(raw_link)
                description = item.find("description").text if item.find("description") is not None else ""
                
                # Try to find an image
                image_url = None
                
                # 1. Look for enclosure
                enclosure = item.find("enclosure")
                if enclosure is not None and 'url' in enclosure.attrib:
                    image_url = enclosure.attrib['url']
                
                # 2. Look for media:content or media:thumbnail
                if not image_url:
                    media_content = item.find("media:content", ns)
                    if media_content is not None and 'url' in media_content.attrib:
                        image_url = media_content.attrib['url']
                    else:
                        media_thumb = item.find("media:thumbnail", ns)
                        if media_thumb is not None and 'url' in media_thumb.attrib:
                            image_url = media_thumb.attrib['url']
                
                # 3. Look for img tag in description (very common in RSS)
                if not image_url and description:
                    import re
                    # Broaden regex to catch more image types and ignore attributes
                    # Slickdeals images are often like: <img src="https://static.slickdeals.net/..." />
                    img_match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', description, re.IGNORECASE)
                    if img_match:
                        image_url = img_match.group(1)
                    
                    # 4. Special check for slickdeals.net links if still no image
                    # Sometimes they use specific classes or structures
                    if not image_url and "slickdeals.net" in description:
                        # Extract any URL that looks like an image if we're desperate
                        fallback_img = re.search(r'https://[^"\']+\.(?:jpg|jpeg|png|gif|webp)', description, re.IGNORECASE)
                        if fallback_img:
                            image_url = fallback_img.group(0)

                deal = {
                    "title": title,
                    "link": link,
                    "description": description,
                    "image": image_url,
                    "source": source["name"],
                    "badge": "NEW"
                }
                all_deals.append(deal)
        except Exception as e:
            print(f"Error scraping {source['name']}: {e}")
            
    return all_deals

def save_deals(deals):
    output_path = os.path.join(os.path.dirname(__file__), "raw_deals.json")
    with open(output_path, "w") as f:
        json.dump(deals, f, indent=4)
    print(f"Saved {len(deals)} deals to {output_path}")

if __name__ == "__main__":
    deals = get_deals()
    save_deals(deals)
