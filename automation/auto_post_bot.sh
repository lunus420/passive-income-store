#!/bin/bash
# Auto Posting Bot Script
# Run this 3x daily or set up as cron job

echo "🤖 Starting Auto Posting Bot..."

cd "$(dirname "$0")"

# Get current time
HOUR=$(date +%H)

if [ "$HOUR" -eq 8 ]; then
    echo "📅 Posting MORNING content to Twitter..."
    # Copy morning post
    if [ -f "daily_posts_morning.txt" ]; then
        echo "Morning post ready for Twitter"
        echo "Content:"
        cat daily_posts_morning.txt
        echo ""
        echo "👉 Copy and paste this to Twitter"
    fi
    
elif [ "$HOUR" -eq 14 ]; then
    echo "📅 Posting AFTERNOON content to Facebook..."
    # Copy afternoon post
    if [ -f "daily_posts_afternoon.txt" ]; then
        echo "Afternoon post ready for Facebook"
        echo "Content:"
        cat daily_posts_afternoon.txt
        echo ""
        echo "👉 Copy and paste this to Facebook"
    fi
    
elif [ "$HOUR" -eq 19 ]; then
    echo "📅 Posting EVENING content to Reddit..."
    # Copy evening post
    if [ -f "daily_posts_evening.txt" ]; then
        echo "Evening post ready for Reddit"
        echo "Content:"
        cat daily_posts_evening.txt
        echo ""
        echo "👉 Copy and paste this to Reddit"
    fi
else
    echo "⏰ Not a scheduled posting time. Next post at:"
    echo "8:00 AM (Twitter)"
    echo "2:00 PM (Facebook)" 
    echo "7:00 PM (Reddit)"
fi

echo "✅ Bot check complete!"
