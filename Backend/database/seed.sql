INSERT INTO Users (username, password, role) VALUES
('creator1', 'hashedpassword1', 'creator'),
('consumer1', 'hashedpassword2', 'consumer');

INSERT INTO Videos (title, url, hashtags, userId) VALUES
('Sample Video 1', 'https://example.com/video1.mp4', '#fun #coding', 1);

INSERT INTO Comments (content, userId, videoId) VALUES
('Great video!', 2, 1);
