#!/bin/bash
echo "🚀 Preparing to deploy to GitHub..."

# Ensure we are in the right directory
cd "$(dirname "$0")"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git..."
    git init
    git add .
    git commit -m "Initial commit"
fi

# Check for remote
if git remote | grep -q "origin"; then
    echo "✅ Remote 'origin' found."
else
    echo "⚠️  No remote repository found."
    echo "👉 Go to https://github.com/new and create a repository named 'passive-income-store'."
    echo "   (Make sure it's Public and don't add README/gitignore yet)"
    echo ""
    read -p "🔗 Paste the URL of your new repository here (e.g., https://github.com/username/repo.git): " REPO_URL
    if [ -z "$REPO_URL" ]; then
        echo "❌ No URL provided. Exiting."
        exit 1
    fi
    git remote add origin "$REPO_URL"
fi

echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Your code is on GitHub."
    echo "👉 Now go to your Repo Settings -> Pages -> Source: 'Deploy from a branch' -> Select 'main' -> Save."
    echo "🌍 Your site will be live in ~2 minutes!"
else
    echo "❌ Push failed. Please check your URL and GitHub permissions."
fi
