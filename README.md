# Feedback-system
This is a Customer Feedback Platform that allows users to log in via Google OAuth, submit feedback, and interact with suggestions. It integrates Frill.co for feedback management and follows a microservices architecture, using Node.js for the backend and React (Vite) for the frontend.
Prerequisites

Before running the project, ensure you have the following installed:

    Node.js (Latest LTS version recommended)

    MongoDB (Ensure MongoDB is installed and running)

Backend Setup

    Clone the repository

git clone https://github.com/your-username/customer-feedback-platform.git
cd customer-feedback-platform/backend

Install dependencies

npm install

Start MongoDB service

    On Linux/macOS:

sudo service mongod start

On Windows (via MongoDB Compass or terminal):

    mongod

Run the backend server

    nodemon index.js

    The backend should now be running on http://localhost:5000 (or your configured port).

Frontend Setup

    Navigate to the frontend folder

cd ../frontend

Install dependencies

npm install

Run the frontend

npm run dev

The React app should now be running on http://localhost:5173 (default Vite port).
