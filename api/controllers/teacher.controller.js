const BaseController = require('./base.controller');
const { TeacherDTO } = require('../dtos');

class TeacherController extends BaseController {

  constructor({ TeacherService }) {
    super(TeacherService, TeacherDTO);
  }

}

module.exports = TeacherController;