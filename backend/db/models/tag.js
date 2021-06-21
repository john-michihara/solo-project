'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Tag.associate = function (models) {
    Tag.belongsTo(models.User, { foreignKey: 'userId' });

    const columnMapping = {
      through: 'usedTag',
      otherKey: 'noteId',
      foreignKey: 'tagId'
    }

    Tag.belongsToMany(models.Note, columnMapping);
  };
  return Tag;
};
