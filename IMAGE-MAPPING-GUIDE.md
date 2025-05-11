# Barber Shop Image Mapping Guide

This guide helps you map the provided barber shop images to the correct locations in the project.

## Quick Setup (Recommended)

We've included a script that automatically renames your images based on their order:

```bash
./rename-images.sh /path/to/your/images
```

This assumes your images are in the following order:
1. Close-up of back/neck taper fade
2. Shop exterior - "S.A.K. BARBER SHOP" 
3. Barber shop logo/sign
4. Side view of man with fade haircut
5. Man with beard and styled hair
6. Person with colored high-top fade hairstyle
7. Barber station with tools laid out
8. Side profile of man with high and tight fade
9. Side profile of man with beard

## Alternative Setup Methods

### Option 1: Using the copy-images.sh script

If your images are numbered 1.jpg, 2.jpg, etc., you can use:

```bash
./copy-images.sh /path/to/your/images
```

### Option 2: Manual renaming

If you prefer to manually rename your images:

1. Rename each image according to the mapping below
2. Place them in `public/images/gallery/`
3. Restart your development server

## Image Mapping Reference

Here's how to name each provided image to match the code structure:

### Fade Hairstyles
- `fade-1.jpg` - Close-up of back/neck taper fade (first image in your set)
- `fade-2.jpg` - Side view of man with fade haircut (image from middle-right panel)
- `fade-3.jpg` - Side profile of man with high and tight fade (from bottom-right panel)

### Beard Styles
- `beard-1.jpg` - Man with beard and styled hair (from bottom-left panel)
- `beard-2.jpg` - Side profile of man with beard (from middle-left panel)

### Style
- `style-1.jpg` - Person with colored high-top fade hairstyle (from middle panels)

### Shop Images
- `shop-1.jpg` - Exterior of "S.A.K. BARBER SHOP" (from second image)
- `shop-2.jpg` - Barber shop logo/sign (from third image)

### Tools
- `tools-1.jpg` - Barber station with tools laid out (from last image)

## Verification

After placing the images, run the application and verify that:
1. The gallery page shows all your images correctly
2. The hero section on the homepage shows the shop exterior
3. All image categories are properly filtered 