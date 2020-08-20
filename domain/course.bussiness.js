const { Course } = require('./models');
const BaseBussiness = require('./base.bussiness');

class CourseBussiness extends BaseBussiness {

  constructor({ CourseRepository }) {
    super(CourseRepository, Course);
  }

}

module.exports = CourseBussiness;