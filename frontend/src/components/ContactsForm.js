import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ContactForm = ({ onSubmit, initialData }) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
    });

    useEffect(() => {
        if (initialData) setContact(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(contact);
        setContact({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            company: '',
            jobTitle: '',
        });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: 'auto' }}
        >
            <TextField
                label="First Name"
                name="firstName"
                value={contact.firstName}
                onChange={handleChange}
                required
            />
            <TextField
                label="Last Name"
                name="lastName"
                value={contact.lastName}
                onChange={handleChange}
                required
            />
            <TextField
                label="Email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                required
            />
            <TextField
                label="Phone Number"
                name="phoneNumber"
                value={contact.phoneNumber}
                onChange={handleChange}
                required
            />
            <TextField
                label="Company"
                name="company"
                value={contact.company}
                onChange={handleChange}
            />
            <TextField
                label="Job Title"
                name="jobTitle"
                value={contact.jobTitle}
                onChange={handleChange}
            />
            <Button variant="contained" type="submit">
                {initialData ? 'Update Contact' : 'Add Contact'}
            </Button>
        </Box>
    );
};

export default ContactForm;
