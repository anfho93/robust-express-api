const { Teacher } = require('./models');
const BaseBussiness = require('./base.bussiness');

class TeacherBussiness extends BaseBussiness {

  constructor({ TeacherRepository }) {
    super(TeacherRepository, Teacher);
  }

}

module.exports = TeacherBussiness;