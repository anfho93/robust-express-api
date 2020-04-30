'use strict';
module.exports = function (sequelize, DataTypes) {
  const lecturer = sequelize.define(
    'lecturers',
    {
      lecturerName: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'lecturers',
      timestamps: false
    }
  );

  lecturer.associate = function (models) {
    lecturer.hasOne(models.courses, {
      foreignKey: 'lecturerId',
      as: 'courses'
    });
  };
  return lecturer;
};
