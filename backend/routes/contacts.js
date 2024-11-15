const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Add a new contact
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
        const newContact = new Contact({ firstName, lastName, email, phoneNumber, company, jobTitle });
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Retrieve all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a contact
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(updatedContact);
    } catch (err) {
        res.status(500).json({ message: 'Error updating contact', error: err.message });
    }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
