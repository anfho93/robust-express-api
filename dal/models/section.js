'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    teacherId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Section.associate = function (models) {
    // associations can be defined here
    Section.belongsTo(models.Teacher);
    Section.belongsTo(models.Course);
    Section.belongsTo(models.Subject);
    Section.belongsToMany(models.Student, {
      through: 'Registration',
      as: 'students',
      foreignKey: 'sectionId'
    });
  };
  return Section;
};