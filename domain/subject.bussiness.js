const { Subject } = require('./models');
const BaseBussiness = require('./base.bussiness');

class SubjectBussiness extends BaseBussiness {

  constructor({ SubjectRepository }) {
    super(SubjectRepository, Subject);
  }

}

module.exports = SubjectBussiness;