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
            for item in root.findall(".//item"):
                title = item.find("title").text if item.find("title") is not None else "No Title"
                raw_link = item.find("link").text if item.find("link") is not None else "#"
                link = append_affiliate_tag(raw_link)
                description = item.find("description").text if item.find("description") is not None else ""
                
                # Basic parsing for price and image if possible (source specific or generic)
                # This is a bit tricky with RSS, might need better extraction later
                
                deal = {
                    "title": title,
                    "link": link,
                    "description": description,
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
