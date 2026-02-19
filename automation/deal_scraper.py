import requests
import xml.etree.ElementTree as ET
import json
import os
import random
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse, urlencode, parse_qs, urljoin

# Sources for deals (RSS feeds)
SOURCES = [
    {"name": "Slickdeals", "url": "https://slickdeals.net/newsearch.php?mode=frontpage&searcharea=deals&searchin=first&rss=1"},
    {"name": "DealNews Tech", "url": "https://www.dealnews.com/c142/Tech-Gadgets/?rss=1"},
    {"name": "DealNews Home", "url": "https://www.dealnews.com/c49/Home-Garden/?rss=1"},
    # Additional sources that often have direct retailer links
    {"name": "BensBargains", "url": "https://bensbargains.com/feed/"},
    {"name": "FatWallet", "url": "https://slickdeals.net/newsearch.php?mode=frontpage&searcharea=deals&searchin=first&rss=1&q=amazon"},
]

# Shopify stores to check (using their /products.json endpoint)
SHOPIFY_SOURCES = [
    {"name": "Ridge Gear", "url": "https://www.ridge.com/products.json"},
    {"name": "Master & Dynamic", "url": "https://www.masterdynamic.com/products.json"},
    {"name": "Ugmonk", "url": "https://ugmonk.com/products.json"},
]

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
]

# Affiliate Tags (YOUR IDs)
AFFILIATE_TAGS = {
    "amazon": "bigterry20036-20",
    "temu": "alg041956",
    "ebay": "4tima",
    "shopify": "moment_partner_2026", # Placeholder for shopify-specific affiliate id if it existed
    "default": "money_maker_2026"
}

# Retailers we want to extract direct links for (these earn affiliate commissions)
RETAILER_DOMAINS = [
    "amazon.com",
    "walmart.com",
    "ebay.com",
    "bestbuy.com",
    "homedepot.com",
    "lowes.com",
    "target.com",
    "newegg.com",
    "temu.com",
    "costco.com",
    "woot.com",
    "sennheiser.com",
    "samsung.com",
    "dell.com",
    "apple.com",
    "ridge.com",
    "masterdynamic.com",
    "ugmonk.com",
    "shopmoment.com",
]

def resolve_redirect(url, timeout=6):
    """Follow redirects to find the real destination retailer URL."""
    if not url or url == "#":
        return url
    try:
        headers = {"User-Agent": random.choice(USER_AGENTS)}
        # Use HEAD first to avoid downloading full page
        resp = requests.head(url, headers=headers, allow_redirects=True, timeout=timeout)
        final_url = resp.url
        # Check if the final URL is a known retailer
        for domain in RETAILER_DOMAINS:
            if domain in final_url:
                print(f"  🔗 Resolved to direct link: {domain}")
                return final_url
        # If HEAD didn't redirect to a retailer, try GET and look for meta refresh or JS redirect
        resp = requests.get(url, headers=headers, allow_redirects=True, timeout=timeout)
        final_url = resp.url
        for domain in RETAILER_DOMAINS:
            if domain in final_url:
                print(f"  🔗 Resolved via GET: {domain}")
                return final_url
        # Search for redirect targets in the page body
        body = resp.text[:5000]
        urls_in_body = re.findall(r'https?://[^\s"\')>]+', body)
        for found_url in urls_in_body:
            for domain in RETAILER_DOMAINS:
                if domain in found_url:
                    return found_url.rstrip('\"\',;)')
    except Exception as e:
        pass
    return url


def append_affiliate_tag(url):
    """Append the correct affiliate tag based on the retailer domain."""
    if not url or url == "#":
        return url
    
    separator = "&" if "?" in url else "?"
    
    if "amazon.com" in url:
        # Remove any existing tag parameter first
        url = re.sub(r'[?&]tag=[^&]*', '', url)
        separator = "&" if "?" in url else "?"
        return f"{url}{separator}tag={AFFILIATE_TAGS['amazon']}"
    elif "ebay.com" in url:
        url = re.sub(r'[?&]mkcid=[^&]*', '', url)
        separator = "&" if "?" in url else "?"
        return f"{url}{separator}mkcid=1&mkrid=711-53200-19255-0&campid={AFFILIATE_TAGS['ebay']}"
    elif "temu.com" in url:
        return f"{url}{separator}affiliate_id={AFFILIATE_TAGS['temu']}"
    elif any(d in url for d in ["ridge.com", "masterdynamic.com", "ugmonk.com", "shopmoment.com"]):
        # Universal Shopify referral tag (placeholder)
        return f"{url}{separator}ref={AFFILIATE_TAGS['shopify']}"
    elif "walmart.com" in url or "bestbuy.com" in url or "homedepot.com" in url or "newegg.com" in url:
        # These retailers still earn through the aggregator affiliate program
        return f"{url}{separator}ref={AFFILIATE_TAGS['default']}"
    else:
        return f"{url}{separator}ref={AFFILIATE_TAGS['default']}"

def extract_retailer_url(description, raw_link):
    """
    Try to find the actual retailer URL inside the deal description.
    Aggregator sites (Slickdeals, DealNews) often mention the direct retailer 
    link in the deal text. Extracting it means our affiliate tags actually work.
    """
    if not description:
        return None
    
    # Priority retailers - we earn commissions on these
    priority_map = {
        "amazon.com": 10,
        "ebay.com": 9,
        "temu.com": 8,
        "walmart.com": 7,
        "bestbuy.com": 7,
        "homedepot.com": 7,
        "newegg.com": 7,
        "target.com": 7,
        "costco.com": 6,
        "dell.com": 6,
        "samsung.com": 6,
        "lowes.com": 6,
        "woot.com": 5,
        "sennheiser.com": 5,
        "apple.com": 5,
        "ridge.com": 8,
        "masterdynamic.com": 8,
        "ugmonk.com": 8,
        "shopmoment.com": 8,
        "morningsave.com": 4,
    }
    
    # Strategy 1: Find full https URLs in description text
    full_urls = re.findall(r'https?://[^\s<>"\')\],]+', description)
    
    # Strategy 2: Find URLs inside href attributes  
    href_urls = re.findall(r'href=["\']([^"\']+)["\']', description)
    full_urls.extend(href_urls)
    
    # Strategy 3: Slickdeals bracket-style links like "Amazon [amazon.com]"
    # These are just domain mentions, but we can still use them to know the retailer
    bracket_domains = re.findall(r'\[([^\]]+\.com[^\]]*)\]', description)
    
    # Strategy 4: Look for Amazon short-form dp/ URLs
    amazon_dp = re.findall(r'https?://(?:www\.)?amazon\.com/(?:dp|gp/product)/[A-Z0-9]+/?[^\s<>"\')\]]*', description)
    full_urls.extend(amazon_dp)
    
    # Score and pick the best URL
    best_url = None
    best_priority = -1
    
    for url in full_urls:
        # Clean trailing punctuation
        url = url.rstrip('.,;:)*')
        
        for domain, priority in priority_map.items():
            if domain in url and priority > best_priority:
                # Accept any URL with a path (not just bare domain)
                # amazon.com/dp/X is only 20 chars but is a valid product link
                if "/" in url.split(domain)[1] if domain in url else False:
                    best_url = url
                    best_priority = priority
                    break
    
    # If we found nothing from full URLs, check if Slickdeals brackets mention
    # a retailer — in that case, the aggregator link is still all we have
    # but at least we know the deal IS from Amazon/etc
    if not best_url and bracket_domains:
        for bd in bracket_domains:
            for domain in priority_map:
                if domain in bd:
                    # We know it's an Amazon deal but only have the Slickdeals link
                    # Still return None - the aggregator link will be used
                    # but we'll mark the source for the store display
                    return None
    
    return best_url


def get_shopify_deals():
    """Fetch deals from Shopify stores using their /products.json endpoint."""
    shopify_deals = []
    headers = {"User-Agent": random.choice(USER_AGENTS)}
    
    for source in SHOPIFY_SOURCES:
        try:
            print(f"Scraping Shopify source: {source['name']}...")
            response = requests.get(source["url"], headers=headers, timeout=10)
            if response.status_code != 200:
                print(f"Failed to fetch {source['name']}: {response.status_code}")
                continue
            
            data = response.json()
            products = data.get("products", [])
            
            # The store is for tech/gear, so we'll grab the first 5 "fresh" items
            for item in products[:5]:
                title = item.get("title", "No Title")
                handle = item.get("handle", "")
                # Create a direct link
                base_url = source["url"].split("/products.json")[0]
                raw_link = f"{base_url}/products/{handle}"
                link = append_affiliate_tag(raw_link)
                
                description = item.get("body_html", "")[:200] + "..."
                image_url = item.get("images", [{}])[0].get("src")
                
                # Get price from variants
                price = "Check Site"
                variants = item.get("variants", [])
                if variants:
                    price = f"${variants[0].get('price', '0')}"

                deal = {
                    "title": f"New: {title} {price}",
                    "link": link,
                    "link_type": "direct",
                    "description": description,
                    "image": image_url,
                    "source": source["name"],
                    "badge": "NEW"
                }
                shopify_deals.append(deal)
        except Exception as e:
            print(f"Error scraping Shopify {source['name']}: {e}")
            
    return shopify_deals


def get_deals():
    all_deals = []
    
    # 1. Scrape RSS Aggregators
    for source in SOURCES:
        try:
            headers = {"User-Agent": random.choice(USER_AGENTS)}
            response = requests.get(source["url"], headers=headers, timeout=10)
            if response.status_code != 200:
                print(f"Failed to fetch {source['name']}: {response.status_code}")
                continue
                
            root = ET.fromstring(response.content)
            ns = {'media': 'http://search.yahoo.com/mrss/'}
            
            for item in root.findall(".//item"):
                title = item.find("title").text if item.find("title") is not None else "No Title"
                raw_link = item.find("link").text if item.find("link") is not None else "#"
                description = item.find("description").text if item.find("description") is not None else ""
                
                # --- KEY FIX: Extract the ACTUAL retailer URL from the description ---
                retailer_url = extract_retailer_url(description, raw_link)
                
                if retailer_url:
                    # We found a direct retailer link in description text!
                    link = append_affiliate_tag(retailer_url)
                    link_source = "direct"
                else:
                    # Mark for batch redirect resolution later
                    link = raw_link
                    link_source = "pending_redirect"
                
                # --- Image extraction ---
                image_url = None
                
                # 1. Enclosure
                enclosure = item.find("enclosure")
                if enclosure is not None and 'url' in enclosure.attrib:
                    image_url = enclosure.attrib['url']
                
                # 2. media:content or media:thumbnail
                if not image_url:
                    media_content = item.find("media:content", ns)
                    if media_content is not None and 'url' in media_content.attrib:
                        image_url = media_content.attrib['url']
                    else:
                        media_thumb = item.find("media:thumbnail", ns)
                        if media_thumb is not None and 'url' in media_thumb.attrib:
                            image_url = media_thumb.attrib['url']
                
                # 3. img tag in description
                if not image_url and description:
                    img_match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', description, re.IGNORECASE)
                    if img_match:
                        image_url = img_match.group(1)
                    
                    # 4. Any image URL in description
                    if not image_url:
                        fallback_img = re.search(r'https://[^"\' <>]+\.(?:jpg|jpeg|png|gif|webp)', description, re.IGNORECASE)
                        if fallback_img:
                            image_url = fallback_img.group(0)

                deal = {
                    "title": title,
                    "link": link,
                    "link_type": link_source,  # Track whether this is a direct or aggregator link
                    "description": description,
                    "image": image_url,
                    "source": source["name"],
                    "badge": "NEW"
                }
                all_deals.append(deal)
        except Exception as e:
            print(f"Error scraping {source['name']}: {e}")
            
    # 2. Scrape Shopify Stores
    shopify_deals = get_shopify_deals()
    all_deals.extend(shopify_deals)

    # 3. Batch-resolve pending redirects in parallel
    pending = [d for d in all_deals if d.get("link_type") == "pending_redirect"]
    if pending:
        print(f"\n⚡ Resolving {len(pending)} redirects in parallel (20 workers)...")
        def _resolve(deal):
            resolved = resolve_redirect(deal["link"])
            is_retailer = any(dom in resolved for dom in RETAILER_DOMAINS)
            if is_retailer and resolved != deal["link"]:
                deal["link"] = append_affiliate_tag(resolved)
                deal["link_type"] = "direct"
            else:
                deal["link"] = append_affiliate_tag(deal["link"])
                deal["link_type"] = "aggregator"
            return deal

        with ThreadPoolExecutor(max_workers=20) as executor:
            futures = {executor.submit(_resolve, d): d for d in pending}
            done = 0
            for future in as_completed(futures):
                future.result()  # updates deal dict in place
                done += 1
                if done % 10 == 0:
                    print(f"  Resolved {done}/{len(pending)}...")

    # Print stats
    direct_count = sum(1 for d in all_deals if d.get("link_type") == "direct")
    print(f"\n📊 Link Stats: {direct_count}/{len(all_deals)} deals have DIRECT retailer links (earns commission)")
    
    return all_deals

def save_deals(deals):
    output_path = os.path.join(os.path.dirname(__file__), "raw_deals.json")
    with open(output_path, "w") as f:
        json.dump(deals, f, indent=4)
    print(f"Saved {len(deals)} deals to {output_path}")

if __name__ == "__main__":
    deals = get_deals()
    save_deals(deals)
    
    # Auto-run analysis
    try:
        from income_status import analyze_earnings
        analyze_earnings()
    except ImportError:
        pass
