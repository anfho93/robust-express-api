const BaseService = require('./base.service');

class RegistrationService extends BaseService {

  constructor({RegistrationBussiness}) {
    super(RegistrationBussiness);
  }
  
}

module.exports = RegistrationService;