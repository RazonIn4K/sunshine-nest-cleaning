#!/usr/bin/env bash
set -euo pipefail

echo "Sunshine Nest Cleaning repository setup"
echo "Replace YOUR_USERNAME in the remote URL before running the push command."

git init
git add .
git commit -m "Initial Sunshine Nest Cleaning website"
git branch -M main

echo ""
echo "Now run ONE of these:"
echo ""
echo "Option A: GitHub CLI"
echo "gh repo create sunshine-nest-cleaning --public --source=. --remote=origin --push"
echo ""
echo "Option B: Existing empty GitHub repo"
echo "git remote add origin https://github.com/YOUR_USERNAME/sunshine-nest-cleaning.git"
echo "git push -u origin main"
