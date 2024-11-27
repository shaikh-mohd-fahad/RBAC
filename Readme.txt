# Role-Based Access Control (RBAC) Project

## Overview
Dear HR,  
I am a final-year B.Tech student, and I have developed this RBAC project to showcase my skills and understanding of web development. This project was created within a limited timeframe, and while I am aware it has areas for improvement, I am confident that under the guidance of a mentor at your company, I can enhance its functionality, security, and overall quality to a professional level.

---

## Getting Started

### Start React Application
1. Navigate to the `frontend` directory:
   cd frontend
2. Start the development server:
   npm run dev

### Start JSON Server
1. Navigate to the frontend directory:
   cd frontend
2. Start the JSON server
   json-server --watch db.json --port 3000

#####   Working of the Website
The project consists of a Home Page and an Admin Section.

******Home Page
Contains a menu with an "Admin Dashboard" link.
Clicking on the "Admin Dashboard" redirects to the Admin Section.

##### Admin Section
The admin section is divided into four main parts, accessible via a sidebar:

***Dashboard
Displays an overview of the website, including key metrics and statistics.

***All Users
View a list of all registered users.
Perform Create, Read, Update, and Delete (CRUD) operations on user data.
Role can be assigned to users here and we can edit role for the user.

***Roles
Create roles and assign specific permissions to them.
Edit and delete existing roles as needed.
Here we can set permissions for each role we create. Here READ permission is allowed to all user by default which can not be changed. 
We can edit our roles too.

***Permissions
View a list of all available permissions.
CRUD operations to manage permissions. Here We can create as many as permissions we want. All the Permissions are editable and deletable.

***Key Features
Role-Based Access Control (RBAC) implementation.
Separate sections for managing users, roles, and permissions.
CRUD functionality for users, roles, and permissions.
JSON server is used as a mock backend for this project.

########Acknowledgments

This project represents my individual effort and learning. I look forward to the opportunity to work in your company, where I can gain guidance from experienced mentors and develop advanced, secure, and scalable applications.

Thank you for reviewing my project!