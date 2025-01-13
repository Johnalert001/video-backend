const { Video } = require('../models'); // Replace with your actual Sequelize model

// Upload Video
exports.uploadVideo = async (req, res) => {
  try {
    const { title, hashtags } = req.body;
    const video = await Video.create({
      title,
      hashtags,
      filePath: req.file.path,
      url: `/uploads/${req.file.filename}`, // Adjust as needed
    });
    res.status(201).send(video);
  } catch (error) {
    res.status(500).send({ error: 'Failed to upload video', details: error.message });
  }
};

// List Videos
exports.listVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.status(200).send(videos);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch videos', details: error.message });
  }
};
