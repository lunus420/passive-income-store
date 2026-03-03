# Deployment Guide: Go Live & Start Earning

To start making "easy money," your site needs to be on the internet. Follow these steps to host it for **FREE**.

## 1. Host the Website (Frontend)
The easiest way is using **GitHub Pages**.

1. Create a free account on [GitHub](https://github.com/) if you haven't yet.
2. Run this "Magic Script" in your terminal (I made it for you):
   ```bash
   ./deploy.sh
   ```
3. Follow the on-screen prompts (it will ask for your repo URL).
4. **Done!** It will tell you when your site is live.

## 2. Keep the Automation Running (Backend)
**Good news!** I built a "Robot" into your code (GitHub Actions).

- Once you push your code to GitHub (Step 1), the robot will automatically wake up every day at **8:00 AM** to update your store.
- You don't need to do anything. It runs for free on GitHub's servers.

### Want to force an update right now?
1. Go to your GitHub Repo.
2. Click the **"Actions"** tab.
3. Click **"Daily Store Update"** on the left.
4. Click **"Run workflow"**.

## 3. The Money Setup
Make sure you have replaced the IDs in `deal_scraper.py`:
```python
AFFILIATE_TAGS = {
    "amazon": "YOUR_ACTUAL_ID-20",
    "temu": "YOUR_ACTUAL_ID",
    # ...
}
```

## 4. Promote
1. Copy the text from `automation/daily_post.txt`.
2. Paste it into your Twitter, Discord, or Facebook.
3. Watch the clicks turn into commissions!
