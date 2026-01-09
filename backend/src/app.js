const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); 

// Root Route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});

// Export the "app" object
module.exports = app;