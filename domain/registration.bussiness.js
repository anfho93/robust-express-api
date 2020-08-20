const { Registration } = require('./models');
const BaseBussiness = require('./base.bussiness');

class RegistrationBussiness extends BaseBussiness {

  constructor({ RegistrationRepository }) {
    super(RegistrationRepository, Registration);
  }

}

module.exports = RegistrationBussiness;