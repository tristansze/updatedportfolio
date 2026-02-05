require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Image = require('../models/Image');

const getContentType = (filename) => {
    const ext = path.extname(filename).toLowerCase();
    const types = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.webp': 'image/webp'
    };
    return types[ext] || 'application/octet-stream';
};

async function seedImages() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        const imagesDir = path.join(__dirname, '../../../../updatedportfolio/client/public/images');

        if (!fs.existsSync(imagesDir)) {
            console.error(`Images directory not found: ${imagesDir}`);
            process.exit(1);
        }

        const files = fs.readdirSync(imagesDir);
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
        });

        console.log(`Found ${imageFiles.length} images to seed`);

        let seeded = 0;
        let skipped = 0;

        for (const filename of imageFiles) {
            const existingImage = await Image.findOne({ filename });
            if (existingImage) {
                console.log(`Skipping (exists): ${filename}`);
                skipped++;
                continue;
            }

            const imagePath = path.join(imagesDir, filename);
            const imageBuffer = fs.readFileSync(imagePath);
            const base64Image = imageBuffer.toString('base64');
            const contentType = getContentType(filename);

            const newImage = new Image({
                filename,
                data: base64Image,
                contentType
            });

            await newImage.save();
            console.log(`Seeded: ${filename}`);
            seeded++;
        }

        console.log(`\nSeeding complete!`);
        console.log(`  Seeded: ${seeded}`);
        console.log(`  Skipped: ${skipped}`);
        console.log(`  Total: ${imageFiles.length}`);

        process.exit(0);
    } catch (error) {
        console.error('Error seeding images:', error);
        process.exit(1);
    }
}

seedImages();
