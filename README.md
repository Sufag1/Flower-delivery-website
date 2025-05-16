# 🌸 Flower Delivery Website - Backend

This is the backend server for a Flower Delivery Website built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. It provides a RESTful API for managing flower data including creation, retrieval, update, and deletion of flower entries, along with image uploads.

---

## 🚀 Features

- CRUD operations for flower products
- Image upload support with **Multer**
- MongoDB Atlas integration with **Mongoose**
- Environment-based configuration with **dotenv**
- CORS support for frontend communication

---

## 🧾 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer (file uploads)
- Dotenv
- CORS

---

## 📁 Project Structure

backend/
│
├── controllers/
│ └── userControllers.js
│
├── models/
│ └── userModels.js
│
├── routes/
│ └── userRoutes.js
│
├── uploads/
│ └── [Uploaded images]
│
├── .env
├── server.js
└── package.json

yaml
Copy
Edit

---

## 🚀 Live Demo
🔗 [View Live Demo](https://flower-delivery-website-q9xa.onrender.com/) 

## 🚀 Presentation link
🔗 [Watch Loom Video](https://www.loom.com/share/aa29da5b600a418fbc61cce9adf54fe7?sid=9c676487-271d-41e9-b620-af2d7abcdd95)


## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sufag1/flower-delivery-website.git
cd flower-delivery-website/backend

2. Install Dependencies
bash
Copy
Edit
npm install

3. Start the Server
bash
Copy
Edit
nodemon server.js
The server will run on: http://localhost:4000

📡 API Endpoints
All API endpoints are prefixed with /api/users

Method	Endpoint	Description
GET	/	Get all users
POST	/	Sign up a new user
POST	/	Login a user


👨‍💻 Author
Developed by Farouq Abubakar
💌 Contact me at farouqabubakar99@gmail.com
- **GitHub Repo Link** (https://github.com/Sufag1/Recipe-website.git)   
- **Author Info** → Farouq Abubakar, Sufag1, and farouqabubakar99a@gmail.com.  

📃 License
This project is open source and available under the MIT License.