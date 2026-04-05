// Script to fix product images with more relevant URLs
// This will replace generic Unsplash images with product-specific images

const fs = require('fs');

// Read the current products.js file
let content = fs.readFileSync('products.js', 'utf8');

// Image mapping for specific products
const imageReplacements = [
    {
        pattern: /CHIPS AHOY.*image.*unsplash.*photo-1506617420156-8e4536971650/g,
        newImage: "https://images.unsplash.com/photo-1599503926544-7dc89eb4d4a5?auto=format&fit=crop&w=600&q=80" // Cookies
    },
    {
        pattern: /Maxwell House.*image.*unsplash.*photo-1506617420156-8e4536971650/g,
        newImage: "https://images.unsplash.com/photo-1494475510638-8cd1c9b7edfe?auto=format&fit=crop&w=600&q=80" // Coffee
    },
    {
        pattern: /MiO Hydrate.*image.*unsplash.*photo-1506617420156-8e4536971650/g,
        newImage: "https://images.unsplash.com/photo-1528378141225-c73a6d5b62f2?auto=format&fit=crop&w=600&q=80" // Water drops/liquid
    },
    {
        pattern: /Fancy Feast.*image.*unsplash.*photo-1506617420156-8e4536971650/g,
        newImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80" // Cat food
    },
    {
        pattern: /OGX.*image.*unsplash.*photo-1506617420156-8e4536971650/g,
        newImage: "https://images.unsplash.com/photo-1522337360788-8b13dee73837?auto=format&fit=crop&w=600&q=80" // Hair products
    },
    {
        pattern: /Area Rug.*image.*unsplash.*photo-1506617420156-8e4536971650/g,
        newImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" // Rug/carpet
    },
    {
        pattern: /Greenhouse.*image.*unsplash.*photo-1558618666-fcd25c85f82e/g,
        newImage: "https://images.unsplash.com/photo-1585323982506-6a3e2a6e9d6f?auto=format&fit=crop&w=600&q=80" // Greenhouse
    },
    {
        pattern: /Giveaway.*image.*unsplash.*photo-1558618666-fcd25c85f82e/g,
        newImage: "https://images.unsplash.com/photo-1607342666198-7846b4b5db85?auto=format&fit=crop&w=600&q=80" // Gift box/presents
    }
];

// Apply replacements
imageReplacements.forEach(replacement => {
    content = content.replace(replacement.pattern, replacement.newImage);
});

// Generic category-based image improvements
const categoryImages = {
    "Electronics": [
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80"
    ],
    "Home": [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80"
    ],
    "Food": [
        "https://images.unsplash.com/photo-1494475510638-8cd1c9b7edfe?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1599503926544-7dc89eb4d4a5?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80"
    ],
    "Toys & Fun": [
        "https://images.unsplash.com/photo-1607342666198-7846b4b5db85?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517486808950-2e325a9c94e5?auto=format&fit=crop&w=600&q=80"
    ]
};

// Replace generic images with category-specific ones
Object.keys(categoryImages).forEach(category => {
    const images = categoryImages[category];
    const regex = new RegExp(`"category": "${category}".*?"image": "https://images\\.unsplash\\.com/photo-1506617420156-8e4536971650`, 'g');
    
    let match;
    let imageIndex = 0;
    while ((match = regex.exec(content)) !== null) {
        const newImage = images[imageIndex % images.length];
        content = content.replace(
            match[0],
            match[0].replace('https://images.unsplash.com/photo-1506617420156-8e4536971650', newImage)
        );
        imageIndex++;
    }
});

// Write the updated content back
fs.writeFileSync('products.js', content);

console.log('Product images have been updated with more relevant URLs!');
console.log('Changes made:');
console.log('- Replaced generic Unsplash images with product-specific images');
console.log('- Added category-based image variations');
console.log('- Fixed image-title mismatches for specific products');
