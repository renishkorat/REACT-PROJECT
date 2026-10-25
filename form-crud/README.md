### Form CRUD - Next.js User Registration App

# 📌 Overview

This is a User Registration and CRUD (Create, Read, Update, Delete) Application built using Next.js (App Router) and Bootstrap.

The app allows users to perform full CRUD actions with data persisting in browser localStorage. It includes real-time input validation, search filtering, A-Z/Z-A sorting, and table pagination.

# ✨ Key Features

📝 Form Validation: Checks for required fields, valid email, strong password criteria, and 10-digit Indian mobile numbers.

💾 LocalStorage Persistence: Retains user records even after page refresh.

🔎 Search & Filter: Search users by name or email dynamically.

🔀 Sorting: Sort users alphabetically (A-Z, Z-A) or by email.

📄 Pagination: Table pagination for clean navigation.

👁️ Password Toggle: Show/Hide password field with masked display in the user list.

# 📂 Project Structure


form-crud/
│
├── .next/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── node_modules/
│
├── public/
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md


🛠️ Installation & Setup

Follow these steps to set up and run the project locally:

1. Clone the repository

git clone https://github.com/renishkorat/REACT-PROJECT
cd form-crud


2. Install dependencies

npm install


3. Run the development server

npm run dev


Open http://localhost:3000 in your browser to view the application.