const BaseController = require('./base.controller');
const { StudentDTO } = require('../dtos');

class StudentController extends BaseController {

  constructor({ StudentService }) {
    super(StudentService, StudentDTO);
  }

}

module.exports = StudentController;