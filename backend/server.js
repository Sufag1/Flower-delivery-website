const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();


// starting express app
const app = express();


// Middlewares
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Routes
const flowerRoutes = require('./routes/flowerRoutes');
app.use('/api/flowers', flowerRoutes);


// Connecting to Mongo DB and starting the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to DB and server is on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('DB connection error:', error);
    })
