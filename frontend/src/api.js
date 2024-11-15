import axios from 'axios';

const API_URL = 'http://localhost:5000/contacts'; 

export const fetchContacts = () => axios.get(API_URL);
export const addContact = (contact) => axios.post(API_URL, contact);
export const updateContact = (id, contact) =>
    axios.put(`http://localhost:5000/contacts/${id}`, contact);
export const deleteContact = (id) => axios.delete(`${API_URL}/${id}`);
