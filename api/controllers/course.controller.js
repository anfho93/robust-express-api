const BaseController = require('./base.controller');
const { CourseDTO } = require('../dtos');

class CourseController extends BaseController {

  constructor({ CourseService }) {
    super(CourseService, CourseDTO);
  }

}

module.exports = CourseController;