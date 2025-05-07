#!/bin/bash

# OpenManus UI Redesign Installation Script
# This script implements the Suna.so-inspired UI redesign for OpenManus

echo "=== OpenManus UI Redesign Installation ==="
echo "This script will implement the Suna.so-inspired UI redesign."
echo ""

# Check if we're in the right directory
if [ ! -d "web" ]; then
  echo "Error: 'web' directory not found. Please run this script from the root of the OpenManus project."
  exit 1
fi

# Create backup directory
BACKUP_DIR="web/backup_$(date +%Y%m%d_%H%M%S)"
echo "Creating backup directory: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

# Backup original files
echo "Backing up original files..."
cp web/src/app/globals.css "$BACKUP_DIR/"
cp web/src/app/layout.tsx "$BACKUP_DIR/"
cp web/src/components/features/app-sidebar.tsx "$BACKUP_DIR/"
cp web/src/components/features/chat/messages/index.tsx "$BACKUP_DIR/"
cp web/src/components/features/chat/input/index.tsx "$BACKUP_DIR/"
cp web/src/app/tasks/\[taskid\]/page.tsx "$BACKUP_DIR/"
cp web/src/app/tasks/page.tsx "$BACKUP_DIR/"

# Create public directory if it doesn't exist
echo "Creating public directory if it doesn't exist..."
mkdir -p web/public

# Replace files with redesigned versions
echo "Implementing redesigned files..."
cp web/src/app/globals.css.new web/src/app/globals.css
cp web/src/app/layout.tsx.new web/src/app/layout.tsx
cp web/src/components/features/app-sidebar.tsx.new web/src/components/features/app-sidebar.tsx
cp web/src/components/features/chat/messages/index.tsx.new web/src/components/features/chat/messages/index.tsx
cp web/src/components/features/chat/input/index.tsx.new web/src/components/features/chat/input/index.tsx
cp web/src/app/tasks/\[taskid\]/page.tsx.new web/src/app/tasks/\[taskid\]/page.tsx
cp web/src/app/tasks/page.tsx.new web/src/app/tasks/page.tsx

# Create a simple noise texture if it doesn't exist
if [ ! -f "web/public/noise.png" ]; then
  echo "Creating a placeholder noise texture..."
  # This is a simple command to create a basic noise texture
  # In a real implementation, you would want to use a proper noise texture file
  convert -size 200x200 xc: +noise Random -channel R -evaluate Pow 1 -channel G -evaluate Pow 1 -channel B -evaluate Pow 1 -colorspace gray -contrast-stretch 0x50% web/public/noise.png 2>/dev/null || echo "Could not create noise texture. Please add a noise.png file to web/public/ manually."
fi

echo ""
echo "=== Installation Complete ==="
echo "The OpenManus UI has been redesigned with the Suna.so-inspired style."
echo "Original files have been backed up to: $BACKUP_DIR"
echo ""
echo "To revert changes, run:"
echo "cp $BACKUP_DIR/* web/src/ -r"
echo ""
echo "Please restart your development server to see the changes."