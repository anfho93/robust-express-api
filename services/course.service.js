const BaseService = require('./base.service');

class CourseService extends BaseService {

  constructor({CourseBussiness}) {
    super(CourseBussiness);
  }
  
}

module.exports = CourseService;