const BaseController = require('./base.controller');
const { SubjectDTO } = require('../dtos');

class SubjectController extends BaseController {

  constructor({ SubjectService }) {
    super(SubjectService, SubjectDTO);
  }

}

module.exports = SubjectController;