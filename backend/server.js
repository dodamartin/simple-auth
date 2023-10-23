const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 5000;

// Add CORS middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Set up static file serving for images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware
app.use(express.json());

// Import and use routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
