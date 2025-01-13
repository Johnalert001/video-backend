require('dotenv').config();
const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const videoRoutes = require('./routes/videoRoutes');
const commentRoutes = require('./routes/commentRoutes');
const { sequelize } = require('../config/dbConfig');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes); 
app.use('/api/comments', commentRoutes);

// Serve static files from the Frontend/public directory
app.use(express.static(path.join(__dirname, '../Frontend/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/public/index.html'));
});

// Start server and connect to database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
