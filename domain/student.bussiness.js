const { Student } = require('./models');
const BaseBussiness = require('./base.bussiness');

class StudentBussiness extends BaseBussiness {

  constructor({ StudentRepository }) {
    super(StudentRepository, Student);
  }

}

module.exports = StudentBussiness;