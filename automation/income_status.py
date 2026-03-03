#!/usr/bin/env python3
"""
Affiliate Income Status Dashboard
Aggregates your affiliate IDs and provides direct links to check earnings.
"""

import os
import sys

# Affiliate IDs from deal_scraper.py
AFFILIATE_CONFIG = {
    "Amazon Associates": {
        "id": "bigterry20036-20",
        "url": "https://affiliate-program.amazon.com/home"
    },
    "eBay Partner Network": {
        "id": "4tima",
        "url": "https://partnernetwork.ebay.com/dashboard"
    },
    "Temu Affiliate": {
        "id": "alg041956",
        "url": "https://www.temu.com/affiliate/dashboard"
    },
    "Shopify Brands (Joint)": {
        "id": "moment_partner_2026 (Placeholder)",
        "url": "https://collabs.shopify.com/"
    },
    "PayPal (Direct Sales)": {
        "id": "paypal.me/lilterry200369",
        "url": "https://www.paypal.com/mep/dashboard"
    }
}

def print_dashboard():
    print("="*60)
    print("🚀 AFFILIATE INCOME STATUS DASHBOARD")
    print("="*60)
    print(f"{'Platform':<25} | {'Your ID':<20} | {'Dashboard Link'}")
    print("-" * 60)
    
    for platform, data in AFFILIATE_CONFIG.items():
        print(f"{platform:<25} | {data['id']:<20} | {data['url']}")
        
    print("-" * 60)
    print("\n💡 TIP: Log in to these platforms to see how much cash we're printing.")
    print("="*60)

import json

def analyze_earnings():
    try:
        with open(os.path.join(os.path.dirname(__file__), "raw_deals.json"), "r") as f:
            deals = json.load(f)
    except FileNotFoundError:
        print("❌ No deal data found. Run deal_scraper.py first.")
        return

    direct_deals = [d for d in deals if d.get("link_type") == "direct"]
    aggregator_deals = [d for d in deals if d.get("link_type") == "aggregator"]
    
    # Simple estimation (Assumptions: 2% conversion rate, avg $5 comission for direct, $0.10 for click-through)
    est_direct = len(direct_deals) * 0.02 * 5.00
    est_agg = len(aggregator_deals) * 0.05 * 0.10 # Lower commmission for aggregator referrals
    
    print("\n" + "="*60)
    print("💰 POTENTIAL EARNINGS REPORT (ESTIMATED)")
    print("="*60)
    print(f"Total Active Deals: {len(deals)}")
    print(f"  - Direct Retailer Links: {len(direct_deals)} (Higher Margin)")
    print(f"  - Aggregator Links:      {len(aggregator_deals)} (Volume Play)")
    print("-" * 60)
    print(f"Est. Daily Revenue Potential: ${est_direct + est_agg:.2f}")
    print("="*60 + "\n")

if __name__ == "__main__":
    print_dashboard()
    analyze_earnings()
