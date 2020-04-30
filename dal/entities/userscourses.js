'use strict';
module.exports = function (sequelize, DataTypes) {
  const userCourse = sequelize.define(
    'userCourses',
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER
    },
    {
      tableName: 'userCourses',
      timestamps: false
    }
  );

  userCourse.associate = function (models) {};

  return userCourse;
};
