const express = require('express');
const router = express.Router();
appointments = []
// POST /api/book-appointment
router.post('/', (req, res) => {
    const { date, time, userId } = req.body;

    // Validate date format and future date
    const appointmentDate = new Date(date);
    const currentTime = new Date();
    if (isNaN(appointmentDate.getTime()) || appointmentDate <= currentTime) {
        return res.status(400).json({ error: 'Invalid date or past date' });
    }

    // Check availability
    if (time === '15:00') {
        return res.status(400).json({ error: 'Slot not available' });
    }
    appointments.push({date,time,userId})
    // Confirm booking
    res.json({ message: 'Appointment booked successfully', date, time });
});
router.get('/', (req, res) => {
    res.json({ appointments });
});
module.exports = router;
