module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  return sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

