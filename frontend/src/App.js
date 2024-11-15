import React, { useState, useEffect } from 'react';
import { fetchContacts, addContact, updateContact, deleteContact } from './api';
import ContactForm from './components/ContactsForm';
import ContactsTable from './components/ContactsTable';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [editContact, setEditContact] = useState(null);

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        const response = await fetchContacts();
        setContacts(response.data);
    };

    const handleAddOrUpdate = async (contact) => {
      if (editContact) {
          await updateContact(editContact._id, contact);
      } else {
          await addContact(contact);
      }
      setEditContact(null);
      loadContacts();
  };

    const handleDelete = async (id) => {
        await deleteContact(id);
        loadContacts();
    };

    return (
        <div>
            <h1>Contact Management System</h1>
            <ContactForm onSubmit={handleAddOrUpdate} initialData={editContact} />
            <ContactsTable contacts={contacts} onEdit={setEditContact} onDelete={handleDelete} />
        </div>
    );
};

export default App;
