#!/bin/bash
# Antigravity Service Installer

SERVICE_NAME="antigravity-remote.service"
SERVICE_PATH="/home/explode_420/Downloads/anti gravity/passive-income-store/automation/$SERVICE_NAME"
SYSTEMD_PATH="/etc/systemd/system/$SERVICE_NAME"

echo "🚀 Installing Antigravity Mobile Remote as a system service..."

# Copy service file to systemd directory
sudo cp "$SERVICE_PATH" "$SYSTEMD_PATH"

# Reload systemd, enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable "$SERVICE_NAME"
sudo systemctl restart "$SERVICE_NAME"

echo "✅ Success! Antigravity Mobile Remote is now active and will start on boot."
echo "You can check status with: sudo systemctl status $SERVICE_NAME"
