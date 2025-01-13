const { Comment } = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const { content, userId, videoId } = req.body;
    const comment = await Comment.create({ content, userId, videoId });
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCommentsForVideo = async (req, res) => {
  try {
    const { videoId } = req.params;
    const comments = await Comment.findAll({ where: { videoId } });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
