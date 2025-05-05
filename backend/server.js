const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { error } = require('console');

// starting express app
const app = express();

// logging middlewares
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to DB and server is on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('DB connection error:', error);
    })
