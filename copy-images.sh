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

# Define image mappings (source filename -> target filename)
declare -A IMAGE_MAPPINGS=(
  ["1.jpg"]="fade-1.jpg"       # Neck taper fade close-up
  ["2.jpg"]="shop-1.jpg"       # Shop exterior
  ["3.jpg"]="shop-2.jpg"       # Barber shop logo
  ["4.jpg"]="fade-2.jpg"       # Side view fade
  ["5.jpg"]="beard-1.jpg"      # Man with beard
  ["6.jpg"]="style-1.jpg"      # Colored high-top fade
  ["7.jpg"]="tools-1.jpg"      # Barber tools
  ["8.jpg"]="fade-3.jpg"       # High and tight fade
  ["9.jpg"]="beard-2.jpg"      # Side profile with beard
)

# Copy and rename each image
for SOURCE_NAME in "${!IMAGE_MAPPINGS[@]}"; do
  TARGET_NAME="${IMAGE_MAPPINGS[$SOURCE_NAME]}"
  SOURCE_PATH="$SOURCE_DIR/$SOURCE_NAME"
  TARGET_PATH="$TARGET_DIR/$TARGET_NAME"
  
  if [ -f "$SOURCE_PATH" ]; then
    echo "Copying $SOURCE_PATH → $TARGET_PATH"
    cp "$SOURCE_PATH" "$TARGET_PATH"
  else
    echo "Warning: Source file $SOURCE_PATH not found"
  fi
done

echo "Images have been set up successfully!"
echo "Start your development server to see the changes." 