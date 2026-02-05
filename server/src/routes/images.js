const express = require('express');
const router = express.Router();
const multer = require('multer');
const Image = require('../models/Image');
const connectDB = require('../db');

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

// GET /api/images/:filename - Get image by filename
router.get('/:filename', async (req, res) => {
    try {
        await connectDB();
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
        await connectDB();
        const images = await Image.find().select('filename contentType createdAt');
        res.json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'Error fetching images' });
    }
});

// POST /api/images - Upload a new image
router.post('/', upload.single('image'), async (req, res) => {
    try {
        await connectDB();

        if (!req.file) {
            return res.status(400).json({ message: 'No image file provided' });
        }

        const filename = req.body.filename || req.file.originalname;

        const existing = await Image.findOne({ filename });
        if (existing) {
            return res.status(409).json({ message: `Image '${filename}' already exists` });
        }

        const newImage = new Image({
            filename,
            data: req.file.buffer.toString('base64'),
            contentType: req.file.mimetype
        });

        await newImage.save();
        res.status(201).json({ message: 'Image uploaded successfully', filename });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Error uploading image' });
    }
});

module.exports = router;
