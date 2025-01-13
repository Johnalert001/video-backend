const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('video', 'root', 'Rot456bun!', {
  host: 'localhost',
  dialect: 'mysql',
});

// Import models
const User = require('./User')(sequelize);
const Video = require('./Video')(sequelize);
const Comment = require('./Comment')(sequelize);

Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Video, { foreignKey: 'videoId' });
User.hasMany(Comment, { foreignKey: 'userId' });
Video.hasMany(Comment, { foreignKey: 'videoId' });

// Export Sequelize instance and models
module.exports = {
  sequelize,
  User,
  Video,
  Comment,
};
