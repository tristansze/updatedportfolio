const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

// GET /api/images/:filename - Get image by filename
router.get('/:filename', async (req, res) => {
    try {
        const image = await Image.findOne({ filename: req.params.filename });
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        const imgBuffer = Buffer.from(image.data, 'base64');
        res.set('Content-Type', image.contentType);
        res.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
        res.send(imgBuffer);
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).json({ message: 'Error fetching image' });
    }
});

// GET /api/images - List all image filenames
router.get('/', async (req, res) => {
    try {
        const images = await Image.find().select('filename contentType createdAt');
        res.json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'Error fetching images' });
    }
});

module.exports = router;
