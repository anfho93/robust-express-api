const BaseService = require('./base.service');

class SubjectService extends BaseService {

  constructor({SubjectBussiness}) {
    super(SubjectBussiness);
  }
  
}

module.exports = SubjectService;