const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const uploadRoutes = require("./routes/upload.routes");

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); 

// Routes
app.use("/api", uploadRoutes);


// Export the "app" object
module.exports = app;