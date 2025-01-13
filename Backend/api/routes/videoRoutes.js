const express = require('express');
const multer = require('multer');
const { uploadVideo, listVideos } = require('../controllers/videoController');
const router = express.Router();

// Configure Multer for video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Video Routes
router.post('/upload', upload.single('video'), uploadVideo); // For video uploads
router.get('/', listVideos); // For listing all videos

module.exports = router;
