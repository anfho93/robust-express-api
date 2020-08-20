const BaseController = require('./base.controller');
const { RegistrationDTO } = require('../dtos');

class RegistrationController extends BaseController {

  constructor({ RegistrationService }) {
    super(RegistrationService, RegistrationDTO);
  }

}

module.exports = RegistrationController;