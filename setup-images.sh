#!/bin/bash

# Create necessary directories
mkdir -p public/images/gallery

# Create fade images
cp "fade-1.jpg" public/images/gallery/fade-1.jpg
cp "fade-2.jpg" public/images/gallery/fade-2.jpg 
cp "fade-3.jpg" public/images/gallery/fade-3.jpg

# Create beard images
cp "beard-1.jpg" public/images/gallery/beard-1.jpg
cp "beard-2.jpg" public/images/gallery/beard-2.jpg

# Create style images
cp "style-1.jpg" public/images/gallery/style-1.jpg

# Create shop images
cp "shop-1.jpg" public/images/gallery/shop-1.jpg
cp "shop-2.jpg" public/images/gallery/shop-2.jpg

# Create tools images
cp "tools-1.jpg" public/images/gallery/tools-1.jpg

echo "Images have been set up successfully!" 