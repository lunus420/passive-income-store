#!/usr/bin/env python3
"""
Tech and More — Auto Promotion Bot
===================================
Automatically generates and posts deal promotions to social media.

SETUP (one-time, 5 minutes):
1. Create a Twitter/X account → Get API keys at developer.twitter.com
2. Create a Reddit account → Get API keys at reddit.com/prefs/apps
3. (Optional) Create a Mastodon account → Get token in Settings > Development

Then fill in the API keys in the config below and run this script.
It will auto-post your top deals daily.

If you don't have API keys yet, the script still generates the posts
and saves them to files you can manually copy-paste.
"""

import json
import os
import random
import datetime

# ============================================================
# CONFIGURATION — Fill in your API keys here
# ============================================================
DEFAULT_CONFIG = {
    "twitter": {
        "enabled": False,
        "api_key": "",
        "api_secret": "",
        "access_token": "",
        "access_secret": "",
    },
    "reddit": {
        "enabled": False,
        "client_id": "",
        "client_secret": "",
        "username": "",
        "password": "",
        "subreddits": ["deals", "DealsReddit", "frugal"],
    },
    "mastodon": {
        "enabled": True,
        "instance_url": "https://mastodon.social",
        "access_token": "rTt_jgkDc5VUM3zL2f3VBZWWGZA1pkWDrjcFbKqlWNQ",
    },
}

def load_config():
    """Load configuration from config.json if it exists."""
    config_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "config.json")
    if os.path.exists(config_path):
        try:
            with open(config_path, "r") as f:
                saved_config = json.load(f)
                
            # Update Twitter
            if saved_config.get("twitter"):
                DEFAULT_CONFIG["twitter"].update(saved_config["twitter"])
                if saved_config["twitter"].get("api_key"): # Enable if key present
                     DEFAULT_CONFIG["twitter"]["enabled"] = True

            # Update Reddit
            if saved_config.get("reddit"):
                DEFAULT_CONFIG["reddit"].update(saved_config["reddit"])
                if saved_config["reddit"].get("client_id"): # Enable if key present
                     DEFAULT_CONFIG["reddit"]["enabled"] = True

            # Update Mastodon
            if saved_config.get("mastodon"):
                DEFAULT_CONFIG["mastodon"].update(saved_config["mastodon"])
                
            print("✅ Loaded configuration from config.json")
        except Exception as e:
            print(f"⚠️ Error loading config.json: {e}")
    else:
        print(f"ℹ️ No config.json found at {config_path}, using defaults")
    
    return DEFAULT_CONFIG

CONFIG = load_config()

STORE_URL = "https://lunus420.github.io/passive-income-store/"
STORE_NAME = "Tech and More"

# ============================================================
# POST TEMPLATES
# ============================================================

TWITTER_TEMPLATES = [
    "🔥 {title} — {price}\n\n👉 {link}\n\n#TechAndMore #Deals #Tech #SaveMoney",
    "🚨 DEAL ALERT: {title} just dropped to {price}!\n\n🛒 {link}\n\n#TechAndMore #DailyDeals",
    "💰 Save big! {title} for only {price}\n\nShop now → {link}\n\n#TechDeals #TechAndMore",
    "⚡ Today's steal: {title}\n💲 {price}\n\n{link}\n\n#TechAndMore #Shopping #Deals",
]

REDDIT_TEMPLATE = """**{title}** — {price}

{description}

👉 [Get the deal here]({link})

*Found on [Tech and More]({store_url}) — daily curated tech deals from Amazon, Best Buy, eBay & more.*
"""

MASTODON_TEMPLATES = [
    "🚀 Tech and More Exclusive Deal!\n\n{title}\n💰 Price: {price}\n\n👉 Shop now: {link}\n\n#TechAndMore #Deals #Tech #SaveMoney #ShoppingAlert",
    "💰 Today's Top Pick: {title} for {price}\n\nDon't miss out! → {link}\n\n#TechDeals #SmartShopping #TechAndMore #MastodonDeals",
    "🔥 Hot Price! {title} is now just {price}.\n\nGrab it here: {link}\n\n#DailyDeals #TechAndMore #BargainHunt",
]


def load_deals():
    """Load enhanced deals from the automation output."""
    base_dir = os.path.dirname(__file__)
    enhanced_path = os.path.join(base_dir, "enhanced_deals.json")
    
    if not os.path.exists(enhanced_path):
        print("❌ No enhanced_deals.json found. Run the automation first.")
        return []
    
    with open(enhanced_path, "r") as f:
        deals = json.load(f)
    
    return deals


def generate_twitter_posts(deals, count=5):
    """Generate Twitter-ready posts for top deals."""
    posts = []
    for deal in deals[:count]:
        template = random.choice(TWITTER_TEMPLATES)
        post = template.format(
            title=deal.get("title", "Great Deal")[:80],
            price=deal.get("price", "See link"),
            link=deal.get("link", STORE_URL),
        )
        # Twitter limit is 280 chars
        if len(post) > 280:
            post = post[:277] + "..."
        posts.append(post)
    return posts


def generate_reddit_posts(deals, count=3):
    """Generate Reddit-ready posts for top deals."""
    posts = []
    for deal in deals[:count]:
        post = {
            "title": f"[Deal] {deal.get('title', 'Great Deal')} — {deal.get('price', 'See link')}",
            "body": REDDIT_TEMPLATE.format(
                title=deal.get("title", "Great Deal"),
                price=deal.get("price", "See link"),
                description=deal.get("description", "")[:200],
                link=deal.get("link", STORE_URL),
                store_url=STORE_URL,
            ),
        }
        posts.append(post)
    return posts


def generate_mastodon_posts(deals, count=5):
    """Generate Mastodon-ready posts."""
    posts = []
    for deal in deals[:count]:
        template = random.choice(MASTODON_TEMPLATES)
        post = template.format(
            title=deal.get("title", "Great Deal")[:100],
            price=deal.get("price", "See link"),
            link=deal.get("link", STORE_URL),
        )
        # Mastodon limit is 500 chars
        if len(post) > 500:
            post = post[:497] + "..."
        posts.append(post)
    return posts


def post_to_twitter(posts):
    """Post to Twitter/X using API v2."""
    if not CONFIG["twitter"]["enabled"]:
        print("⚠️  Twitter not configured. Saving posts to twitter_posts.txt instead.")
        save_posts("twitter_posts.txt", posts)
        return
    
    try:
        import tweepy
        
        client = tweepy.Client(
            consumer_key=CONFIG["twitter"]["api_key"],
            consumer_secret=CONFIG["twitter"]["api_secret"],
            access_token=CONFIG["twitter"]["access_token"],
            access_token_secret=CONFIG["twitter"]["access_secret"],
        )
        
        for i, post in enumerate(posts):
            try:
                client.create_tweet(text=post)
                print(f"  ✅ Tweet {i+1} posted!")
            except Exception as e:
                print(f"  ❌ Tweet {i+1} failed: {e}")
    except ImportError:
        print("  ❌ tweepy not installed. Run: pip install tweepy")
        save_posts("twitter_posts.txt", posts)


def post_to_reddit(posts):
    """Post to Reddit using PRAW."""
    if not CONFIG["reddit"]["enabled"]:
        print("⚠️  Reddit not configured. Saving posts to reddit_posts.txt instead.")
        save_posts("reddit_posts.txt", [f"r/{s}\n{p['title']}\n{p['body']}" for s in CONFIG["reddit"]["subreddits"] for p in posts[:1]])
        return
    
    try:
        import praw
        
        reddit = praw.Reddit(
            client_id=CONFIG["reddit"]["client_id"],
            client_secret=CONFIG["reddit"]["client_secret"],
            username=CONFIG["reddit"]["username"],
            password=CONFIG["reddit"]["password"],
            user_agent=f"TechAndMore Bot v1.0 by /u/{CONFIG['reddit']['username']}",
        )
        
        for sub_name in CONFIG["reddit"]["subreddits"]:
            try:
                subreddit = reddit.subreddit(sub_name)
                post = posts[0]  # Post the best deal
                subreddit.submit(
                    title=post["title"],
                    selftext=post["body"],
                )
                print(f"  ✅ Posted to r/{sub_name}")
            except Exception as e:
                print(f"  ❌ Failed to post to r/{sub_name}: {e}")
    except ImportError:
        print("  ❌ praw not installed. Run: pip install praw")


def post_to_mastodon(posts):
    """Post to Mastodon using the API directly."""
    if not CONFIG["mastodon"]["enabled"]:
        print("⚠️  Mastodon not configured. Saving posts to mastodon_posts.txt instead.")
        save_posts("mastodon_posts.txt", posts)
        return
    
    try:
        import requests
        
        instance = CONFIG["mastodon"]["instance_url"].rstrip("/")
        token = CONFIG["mastodon"]["access_token"]
        headers = {"Authorization": f"Bearer {token}"}
        
        for i, post in enumerate(posts):
            try:
                resp = requests.post(
                    f"{instance}/api/v1/statuses",
                    headers=headers,
                    json={"status": post, "visibility": "public"},
                )
                if resp.status_code == 200:
                    print(f"  ✅ Mastodon post {i+1} published!")
                else:
                    print(f"  ❌ Mastodon post {i+1} failed: {resp.status_code}")
            except Exception as e:
                print(f"  ❌ Mastodon post {i+1} error: {e}")
    except ImportError:
        print("  ❌ requests not installed. Run: pip install requests")


def save_posts(filename, posts):
    """Save generated posts to a file for manual copy-paste."""
    base_dir = os.path.dirname(__file__)
    filepath = os.path.join(base_dir, filename)
    
    with open(filepath, "w") as f:
        for i, post in enumerate(posts, 1):
            f.write(f"--- POST {i} ---\n")
            f.write(post)
            f.write("\n\n")
    
    print(f"  📄 Saved {len(posts)} posts to {filename}")
    
    # Append to a master log of generated posts
    with open(os.path.join(base_dir, "generated_posts.log"), "a") as log:
        log.write(f"\n--- {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')} ---\n")
        for p in posts:
            log.write(p + "\n")


def main():
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    print(f"{'='*50}")
    print(f"🤖 Tech and More — Auto Promotion Bot")
    print(f"📅 {now}")
    print(f"{'='*50}\n")
    
    deals = load_deals()
    if not deals:
        return
    
    print(f"📦 Loaded {len(deals)} deals\n")
    
    # Generate posts for each platform
    twitter_posts = generate_twitter_posts(deals, count=3)
    reddit_posts = generate_reddit_posts(deals, count=1)
    mastodon_posts = generate_mastodon_posts(deals, count=3)
    
    # Post to each platform
    print("🐦 Twitter/X:")
    post_to_twitter(twitter_posts)
    
    print("\n🟠 Reddit:")
    post_to_reddit(reddit_posts)
    
    print("\n🐘 Mastodon:")
    post_to_mastodon(mastodon_posts)
    
    print(f"\n{'='*50}")
    print("✅ Promotion cycle complete!")
    
    # Count configured platforms
    active = sum(1 for p in CONFIG.values() if isinstance(p, dict) and p.get("enabled"))
    total = 3
    if active < total:
        print(f"\n💡 {total - active} platform(s) not configured yet.")
        print("   Posts were saved to .txt files — copy-paste them manually!")
        print("   To enable auto-posting, fill in API keys in this script.")
    
    print(f"{'='*50}")


if __name__ == "__main__":
    main()
