const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // For parsing application/json



// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error: ", err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use('/api/books', require('./routes/bookRoutes'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


