const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/messages - Create a new message
router.post('/', async (req, res) => {
    try {
        const message = new Message(req.body);
        await message.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ message: 'Error sending message' });
    }
});

module.exports = router; 