# 🏋️ Powerlift Gym Fullstack Project
Welcome to the Powerlift Gym project repository, a fullstack web application designed exclusively for registered and logged-in users to book appointment services. This application leverages modern web technologies and best practices to provide a secure and efficient user experience.

## Features ✨
 - **User Authentication**: Only registered and logged-in users can access the booking features.
 - **Appointment Booking**: Users can schedule appointments through a user-friendly interface.
 - **Dynamic Component Visibility**: Utilizes Redux to dynamically display components based on the user's authentication status.

## Technologies Used 🔧
### Frontend:
 - Framework: Vite + React
 - State Management: Redux

### Backend:
 - Server: Node.js with TypeScript and ExpressJS
 - Databse type: PostgreSQL
 - ORM: TypeORM for database communication

## Contact Information:
 - Email: saidsimon2@gmail.com
 - [LinkedIn](https://www.linkedin.com/in/webdeveloper-saljure/)

## Getting Started 🚀
### Prerequisites
Ensure you have Node.js, PostgreSQL, and npm or yarn installed on your system to manage dependencies and run the project.

## Installation 📋
Follow these steps to get your development environment running:

### Clone the repository:
git clone (https://github.com/AljureS/PowerliftGym.git)

### Install dependencies:
cd Powerlift-Gym
npm install

### Set up the database:
Ensure PostgreSQL is running on your machine.
Create a new database and note the credentials.
Configure environment variables:

=> Copy .env.example to .env and fill in your database credentials and any other configurations.
Run the migration to set up the database schema:

npm run typeorm migration:run
Start the server:

npm start
Run the frontend:

In a new terminal, navigate to the frontend directory and run:
npm start
Now, your application should be running on localhost:3000 for the frontend and localhost:4000 for the backend (adjust according to your settings).
