#!/bin/bash

# Navigate to the gh-pages working tree
cd ../dist-gh-pages

# Clear existing files
git rm -rf .

# Copy new build from dist folder
cp -R ../dsasidhar.github.io/dist/* .

# Add all files to git
git add .

# Commit the changes
git commit -m "Update gh-pages"

# Push the changes
git push origin gh-pages

# Navigate back to the main directory
cd ../dsasidhar.github.io
