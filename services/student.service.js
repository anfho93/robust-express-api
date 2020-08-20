const BaseService = require('./base.service');

class StudentService extends BaseService {

  constructor({StudentBussiness}) {
    super(StudentBussiness);
  }
  
}

module.exports = StudentService;