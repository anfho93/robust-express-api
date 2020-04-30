'use strict';
module.exports = function (sequelize, DataTypes) {
  const classroom = sequelize.define(
    'classrooms',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      className: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'classrooms',
      timestamps: false
    }
  );

  classroom.associate = function (models) {
    classroom.hasMany(models.users, {
      foreignKey: 'classroomId',
      as: 'users'
    });

  };
  return classroom;
};
