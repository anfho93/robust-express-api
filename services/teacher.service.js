const BaseService = require('./base.service');

class TeacherService extends BaseService {

  constructor({TeacherBussiness}) {
    super(TeacherBussiness);
  }
  
}

module.exports = TeacherService;