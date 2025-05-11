#!/bin/bash

# Check if source directory is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <source_directory>"
  echo "Example: $0 ~/Downloads/barber-images"
  exit 1
fi

SOURCE_DIR="$1"
TARGET_DIR="public/images/gallery"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Define the target filenames in the correct order
TARGET_FILES=(
  "fade-1.jpg"     # First image - neck taper fade
  "shop-1.jpg"     # Second image - shop exterior
  "shop-2.jpg"     # Third image - barber shop logo/sign
  "fade-2.jpg"     # Fourth image - side view fade
  "beard-1.jpg"    # Fifth image - full beard
  "style-1.jpg"    # Sixth image - colored high-top fade
  "tools-1.jpg"    # Seventh image - barber tools
  "fade-3.jpg"     # Eighth image - high and tight fade
  "beard-2.jpg"    # Ninth image - side profile with beard
)

# Get a sorted list of image files from the source directory
SOURCE_FILES=($(find "$SOURCE_DIR" -type f -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | sort))

echo "Found ${#SOURCE_FILES[@]} image files in $SOURCE_DIR"

# Check if we have enough source files
if [ ${#SOURCE_FILES[@]} -lt ${#TARGET_FILES[@]} ]; then
  echo "Warning: Only found ${#SOURCE_FILES[@]} images, but need ${#TARGET_FILES[@]}"
  echo "Will process available images only."
fi

# Copy files with new names
for i in "${!TARGET_FILES[@]}"; do
  if [ $i -lt ${#SOURCE_FILES[@]} ]; then
    SOURCE_PATH="${SOURCE_FILES[$i]}"
    TARGET_PATH="$TARGET_DIR/${TARGET_FILES[$i]}"
    
    echo "Copying $(basename "$SOURCE_PATH") → ${TARGET_FILES[$i]}"
    cp "$SOURCE_PATH" "$TARGET_PATH"
  else
    echo "Skipping ${TARGET_FILES[$i]} - no source file available"
  fi
done

echo "Images have been set up successfully!"
echo "Start your development server to see the changes." 