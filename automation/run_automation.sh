#!/bin/bash

# Passive Income Store Automation Wrapper
# Runs the scraper, enhancer, and updater in sequence

APP_DIR="/home/explode_420/Downloads/anti gravity/passive-income-store"
AUTO_DIR="$APP_DIR/automation"
LOG_FILE="$AUTO_DIR/automation.log"

echo "[$(date)] Starting Daily Store Update..." >> "$LOG_FILE"

cd "$AUTO_DIR"

# Run Python scripts
python3 deal_scraper.py >> "$LOG_FILE" 2>&1
python3 ai_enhancer.py >> "$LOG_FILE" 2>&1
python3 update_store.py >> "$LOG_FILE" 2>&1

echo "[$(date)] Store Update Complete." >> "$LOG_FILE"
echo "-----------------------------------" >> "$LOG_FILE"
