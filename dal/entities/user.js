module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      tableName: 'users',
      timestamps: false
    }
  );

  user.associate = function(models) {
    user.belongsTo(models.classrooms,  {
      foreignKey: 'classroomId',
      as: 'classrooms'
    });

    user.belongsToMany(models.courses,  {
      through: 'userCourses',
      as: 'courses',
      foreignKey: 'id',
    });
    
  };
  return user;
};
