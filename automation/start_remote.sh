#!/bin/bash
# Start the Antigravity Mobile Remote
echo "Starting Antigravity Mobile Remote..."
echo "Access this on your phone at: http://$(hostname -I | awk '{print $1}'):5000"
python3 "/home/hawkatoad/Desktop/anti gravity/passive-income-store/automation/mobile_remote.py"
