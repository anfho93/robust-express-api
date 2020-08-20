'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    Subject.hasMany(models.Section, {
      foreignKey: 'subjectId',
      as: 'sections'
    });
  };
  return Subject;
};