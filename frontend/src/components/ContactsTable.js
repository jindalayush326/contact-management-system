import React from 'react';
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Job Title</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contacts.map((contact) => (
                    <TableRow key={contact._id}>
                        <TableCell>{contact.firstName}</TableCell>
                        <TableCell>{contact.lastName}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.phoneNumber}</TableCell>
                        <TableCell>{contact.company}</TableCell>
                        <TableCell>{contact.jobTitle}</TableCell>
                        <TableCell>
                            <Button onClick={() => onEdit(contact)}>Edit</Button>
                            <Button color="error" onClick={() => onDelete(contact._id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ContactsTable;
