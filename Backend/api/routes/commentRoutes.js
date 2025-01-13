const express = require('express');
const { addComment, getCommentsForVideo } = require('../controllers/commentController');
const router = express.Router();

router.post('/', addComment);
router.get('/:videoId', getCommentsForVideo);

module.exports = router;
