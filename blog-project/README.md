### BlogSpace – React Blog Application

A modern, responsive blog application built using React.js, Vite, Tailwind CSS, JSON Server, and the Fetch API.

Users can browse blogs without logging in. Registered users can create, edit, and delete their own blog posts.

# 🚀 Features

Responsive and modern UI

Browse all blogs without login

View individual blog details

Search blogs by title and description

Filter blogs by category

User registration and login

User authentication using Context API

Create new blog posts

Edit existing blog posts

Delete blog posts

Dashboard to manage personal blogs

Protected routes

LocalStorage for maintaining login sessions

JSON Server for backend and data storage

# 🛠️ Technologies Used

React.js

Vite

JavaScript (ES6+)

Tailwind CSS

React Router DOM

Fetch API

JSON Server

Context API

LocalStorage

Lucide React Icons

# Project Structure

blog-project/
│
├── db.json
├── package.json
├── vite.config.js
│
└── src/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── BlogCard.jsx
    │   ├── ProtectedRoute.jsx
    │   └── Footer.jsx
    │
    ├── context/
    │   └── AuthContext.jsx
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   ├── Dashboard.jsx
    │   ├── CreateBlog.jsx
    │   ├── EditBlog.jsx
    │   └── BlogDetails.jsx
    │
    ├── services/
    │   └── api.js
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css

# Installation

1. Clone the repository

git clone YOUR_REPOSITORY_URL

2. Open the project folder

cd blog-project

3. Install dependencies

npm install

4. Install JSON Server

npm install -D json-server

▶️ Run the Project

You need to run two terminals.

Terminal 1 – Start JSON Server

npm run server

JSON Server will run at:

http://localhost:5000

Terminal 2 – Start React Application

npm run dev

Open the URL displayed by Vite, usually:

http://localhost:5173