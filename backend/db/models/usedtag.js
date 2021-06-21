'use strict';
module.exports = (sequelize, DataTypes) => {
  const usedTag = sequelize.define('usedTag', {
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    noteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  usedTag.associate = function (models) {
    // associations can be defined here
  };
  return usedTag;
};
