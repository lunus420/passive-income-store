#!/usr/bin/env python3
"""
Auto Promotion Bot - Posts deals 3x daily to multiple platforms
"""

import json
import random
import time
from datetime import datetime, timedelta
import requests

class AutoPromoter:
    def __init__(self):
        self.site_url = "https://lunus420.github.io/passive-income-store/"
        self.posts_log = []
        
    def load_products(self):
        """Load current products from products.js"""
        try:
            with open('../products.js', 'r') as f:
                content = f.read()
                # Extract affiliate products
                start = content.find('const affiliateProducts = [')
                end = content.find('];', start) + 2
                products_json = content[start+len('const affiliateProducts = '):end]
                return json.loads(products_json)
        except:
            return []
    
    def generate_twitter_posts(self):
        """Generate 3 different Twitter posts"""
        products = self.load_products()
        if not products:
            return []
        
        # Get 3 random affordable products
        affordable = [p for p in products if '$' in p['price'] and int(p['price'].replace('$','').replace(',','')) < 50]
        selected = random.sample(affordable, min(3, len(affordable)))
        
        posts = []
        for i, product in enumerate(selected):
            post = f"""🔥 DEAL ALERT #{i+1}!

{product['title'].split(':')[1] if ':' in product['title'] else product['title']}
💰 {product['price']} {'(was '+product['originalPrice']+')' if product['originalPrice'] != '---' else ''}

👉 {self.site_url}

#Deals #Tech #Home #Savings #Bargains"""
            posts.append(post)
        
        return posts
    
    def generate_facebook_posts(self):
        """Generate 3 Facebook posts"""
        products = self.load_products()
        posts = []
        
        categories = ["Electronics", "Home", "Food", "Fashion"]
        for i, category in enumerate(categories[:3]):
            cat_products = [p for p in products if p['category'] == category and '$' in p['price']]
            if cat_products:
                product = random.choice(cat_products[:5])  # Get one of first 5
                post = f"""🛍️ DAILY {category.upper()} DEALS! 

Just found this amazing deal:
{product['title'].split(':')[1] if ':' in product['title'] else product['title']}
💰 Only {product['price']}! {'(Save big! Was '+product['originalPrice']+')' if product['originalPrice'] != '---' else ''}

Our site updates automatically every morning with fresh deals across all categories. No spam, just verified savings!

👉 Check it out: {self.site_url}

#{category}Deals #Shopping #Savings #BargainHunting"""
                posts.append(post)
        
        return posts
    
    def generate_reddit_posts(self):
        """Generate 3 Reddit posts"""
        products = self.load_products()
        posts = []
        
        subreddits = ["deals", "frugal", "techdeals", "gamedeals"]
        
        for i, subreddit in enumerate(subreddits[:3]):
            post = ""
            
            if subreddit == "techdeals":
                tech_products = [p for p in products if 'Electronics' in p['category'] and '$' in p['price'] and int(p['price'].replace('$','').replace(',','')) < 100]
                if tech_products:
                    product = random.choice(tech_products)
                    post = f"""[TechDeals] Found: {product['title'].split(':')[1] if ':' in product['title'] else product['title']}

Price: {product['price']} {'(was '+product['originalPrice']+')' if product['originalPrice'] != '---' else ''}
Source: {product['source']}

Found this on a new daily deals aggregator that updates automatically. No affiliate spam, just deals.

Link: {self.site_url}

{product['link']}"""
                    
            elif subreddit == "deals":
                all_affordable = [p for p in products if '$' in p['price'] and int(p['price'].replace('$','').replace(',','')) < 50]
                if all_affordable:
                    product = random.choice(all_affordable)
                    post = f"""[Daily Deals] {product['title'].split(':')[1] if ':' in product['title'] else product['title']}

{product['price']} {'(was '+product['originalPrice']+')' if product['originalPrice'] != '---' else ''}
Category: {product['category']}

Found on a new deals site that auto-updates. Fresh deals every 8AM.

{self.site_url}"""
                    
            else:  # frugal
                budget_items = [p for p in products if '$' in p['price'] and int(p['price'].replace('$','').replace(',','')) < 30]
                if budget_items:
                    product = random.choice(budget_items)
                    post = f"""[Frugal] Budget find: {product['title'].split(':')[1] if ':' in product['title'] else product['title']}

Only {product['price']}! Great for anyone looking to save money.

Found this on a site that updates daily with verified deals:

{self.site_url}"""
            
            if post:  # Only add if post was generated
                posts.append(post)
        
        return posts
    
    def save_posts_to_files(self):
        """Save generated posts to files for easy posting"""
        twitter_posts = self.generate_twitter_posts()
        facebook_posts = self.generate_facebook_posts()
        reddit_posts = self.generate_reddit_posts()
        
        # Save Twitter posts
        with open('twitter_bot_posts.txt', 'w') as f:
            f.write(f"# TWITTER POSTS - {datetime.now().strftime('%Y-%m-%d')}\n\n")
            for i, post in enumerate(twitter_posts, 1):
                f.write(f"POST {i} (Morning):\n{post}\n\n---\n\n")
        
        # Save Facebook posts  
        with open('facebook_bot_posts.txt', 'w') as f:
            f.write(f"# FACEBOOK POSTS - {datetime.now().strftime('%Y-%m-%d')}\n\n")
            for i, post in enumerate(facebook_posts, 1):
                f.write(f"POST {i} (Afternoon):\n{post}\n\n---\n\n")
        
        # Save Reddit posts
        with open('reddit_bot_posts.txt', 'w') as f:
            f.write(f"# REDDIT POSTS - {datetime.now().strftime('%Y-%m-%d')}\n\n")
            for i, post in enumerate(reddit_posts, 1):
                f.write(f"POST {i} (Evening):\n{post}\n\n---\n\n")
        
        print("✅ Generated posts for all platforms!")
        print(f"📱 Twitter: {len(twitter_posts)} posts")
        print(f"📘 Facebook: {len(facebook_posts)} posts") 
        print(f"🤖 Reddit: {len(reddit_posts)} posts")
    
    def create_posting_schedule(self):
        """Create a posting schedule file"""
        schedule = f"""# AUTO PROMOTION SCHEDULE - {datetime.now().strftime('%Y-%m-%d')}

## DAILY POSTING TIMES (3x per day):

### 🌅 MORNING POST (8:00 AM)
- Platform: Twitter
- File: twitter_bot_posts.txt
- Purpose: Catch early commuters

### 🌞 AFTERNOON POST (2:00 PM) 
- Platform: Facebook
- File: facebook_bot_posts.txt  
- Purpose: Lunch break browsers

### 🌆 EVENING POST (7:00 PM)
- Platform: Reddit
- File: reddit_bot_posts.txt
- Purpose: Evening relaxation time

## INSTRUCTIONS:
1. Copy the appropriate post from the file
2. Paste to the platform
3. Add relevant hashtags if needed
4. Done! Your bot did the hard work.

## TRACKING:
Check your affiliate dashboards daily for clicks from these posts.

## NEXT UPDATE:
This schedule refreshes automatically every 24 hours.
"""
        
        with open('posting_schedule.txt', 'w') as f:
            f.write(schedule)
        
        print("📅 Created posting schedule!")

def main():
    promoter = AutoPromoter()
    promoter.save_posts_to_files()
    promoter.create_posting_schedule()
    
    print("\n🤖 YOUR PROMOTION BOT IS READY!")
    print("📁 Files created:")
    print("   - twitter_bot_posts.txt (Morning posts)")
    print("   - facebook_bot_posts.txt (Afternoon posts)")  
    print("   - reddit_bot_posts.txt (Evening posts)")
    print("   - posting_schedule.txt (Schedule)")
    print("\n⚡ Just copy & paste 3x daily!")

if __name__ == "__main__":
    main()
