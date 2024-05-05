const express = require('express');
const router = express.Router();

reservations= []

// POST /api/reservations
router.post('/', (req, res) => {
    const { userId, eventDate, numberOfGuests } = req.body;

    // Ensure the date is in the future and number of guests is positive
    if (new Date(eventDate) <= new Date() || numberOfGuests <= 0) {
        return res.status(400).json({ error: 'Invalid reservation criteria' });
    }

    // Here you can handle the reservation logic
    // For now, returning details
    reservations.push({ userId, eventDate, numberOfGuests })
    
    res.json({ userId, eventDate, numberOfGuests });
});

// GET /api/reservations
router.get('/', (req, res) => {
    res.json({ reservations });
});

module.exports = router;
