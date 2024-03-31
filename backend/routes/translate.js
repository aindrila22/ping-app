const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post('/translate', async (req, res) => {
    try {
        const { language, text } = req.body;

        // Make a POST request to the Flask translation server
        const response = await axios.post('http://localhost:5000/translate', { language, text });

        // Send back the translated text received from Flask server
        res.json({ translated_text: response.data.translated_text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;