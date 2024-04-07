const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bust_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the BusT backend!');
});

// Start server
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});

// MOUNT THE ROUTES\\

const busRoutes = require('./routes/busRoutes');
app.use('/api/v1',busRoutes);