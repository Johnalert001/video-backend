module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  const { sequelize } = require('../../config/dbConfig');

  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('creator', 'consumer'),
      allowNull: false,
    },
  });
};
module.exports = User;