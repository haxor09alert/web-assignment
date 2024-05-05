const express = require('express');
const router = express.Router();

// Sample data storage, replace with database in production
let contacts = [];

// POST /api/users
router.post('/', (req, res) => {
    const { name, phone, email } = req.body;

    // Check if all fields are provided
    if (!name || !phone || !email) {
        return res.status(400).json({ error: 'Name, phone, and email are required' });
    }

    // Check if phone number already exists
    if (contacts.some(contact => contact.phone === phone)) {
        return res.status(400).json({ error: 'Contact with this phone number already exists' });
    }

    // Add contact
    const newContact = { name, phone, email };
    contacts.push(newContact);

    res.json({ message: 'Contact added successfully', contact: newContact });
});

// GET /api/users
router.get('/', (req, res) => {
    res.json({ contacts });
});

module.exports = router;

