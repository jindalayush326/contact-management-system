## Project Description
The Contact Management System is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to manage a contact database. Users can:

Add new contacts.
View a list of existing contacts.
Edit contact details.
Delete outdated or unnecessary contacts.
The project is built using React on the frontend, Node.js with Express for the backend, and MongoDB for the database. Material UI is used for the frontend design components.

## Setup Instructions
# 1. Prerequisites
Ensure the following are installed on your machine:

Node.js (version 14.x or higher)
MongoDB (local or cloud instance such as MongoDB Atlas)

# 2. Backend Setup
Clone the Repository
git clone https://github.com/jindalayush326/contact-management-system.git
cd contact-management-system/backend

Install Dependencies
npm install
Configure Environment Variables Create a .env file in the backend directory with the following content:

Copy code
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority

Start the Server
npm start

Database Schema MongoDB does not require an explicit schema definition. However, the Contact model is structured as follows:
const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    company: { type: String },
    jobTitle: { type: String },
});

3. Frontend Setup
Navigate to Frontend Directory
cd ../frontend
Install Dependencies
npm install
Start the React Application
npm start
Open the application in your browser at http://localhost:3000.

Technical Decisions
Frontend: React with Material UI
React was chosen for its component-based architecture and efficient state management.
Material UI was used to ensure a professional, modern design and rapid prototyping.
Backend: Node.js with Express
Express simplifies building RESTful APIs and handles routing efficiently.
Mongoose provides an abstraction layer over MongoDB, allowing for easy schema definition and validation.
Database: MongoDB
MongoDB was chosen for its flexibility and scalability. Using MongoDB Atlas allows easy deployment and global accessibility.
How Each Part Works
1. Frontend
Components:
ContactForm.js: Handles adding and editing contacts.
ContactsTable.js: Displays the list of contacts with actions for edit and delete.
API Integration:
All CRUD operations are integrated with the backend using axios.
2. Backend
API Endpoints:
POST /contacts: Add a new contact.
GET /contacts: Retrieve all contacts.
PUT /contacts/:id: Update an existing contact.
DELETE /contacts/:id: Delete a contact by ID.
3. Database
Contacts are stored in MongoDB, with fields such as firstName, lastName, email, phoneNumber, company, and jobTitle.
Challenges and Solutions
1. MongoDB Connection Issues
Challenge: Encountered issues connecting to the local MongoDB instance.
Solution: Switched to MongoDB Atlas for simplicity and scalability. Updated the MONGO_URI to a secure connection string and ensured IP whitelisting was correctly configured.
2. CORS Errors
Challenge: Cross-origin requests from React to the backend resulted in CORS errors.
Solution: Enabled CORS in the backend by adding the cors middleware:
javascript
Copy code
const cors = require('cors');
app.use(cors());
3. API Endpoint Testing
Challenge: The PUT and DELETE endpoints were not working correctly due to incorrect _id handling.
Solution: Ensured the _id was correctly passed from React and validated in the backend route. Used Postman to debug and confirm requests.
4. Frontend Form Validation
Challenge: User input validation was inconsistent, leading to errors in submission.
Solution: Added Material UI form validation and ensured required fields were properly validated before submission.
Future Enhancements
Authentication:

Implement user authentication to secure access to the application.
Search and Filter:

Add search and filter capabilities to the contact list.
Responsive Design:

Optimize the design for mobile and tablet devices.
Unit Testing:

Add unit and integration tests for both the frontend and backend.
