'use strict';
module.exports = function (sequelize, DataTypes) {
  const course = sequelize.define(
    'courses',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      courseName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'courses',
      timestamps: false
    }
  );

  course.associate = function (models) {
    course.belongsToMany(models.users, {
      through: 'userCourses',
      as: 'users',
      foreignKey: 'courseId'
    });

    course.belongsTo(models.lecturers, {
      foreignKey: 'lecturerId',
      as: 'lecturers'
    });

  };
  return course;
};
