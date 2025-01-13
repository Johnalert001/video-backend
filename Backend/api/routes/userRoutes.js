const express = require('express');
const { login, signup } = require('../controllers/userController');
const router = express.Router();

// User Routes
router.post('http://localhost:8080/#login', login); // User login
router.post('http://localhost:8080/#signup', signup); // User signup

module.exports = router;
