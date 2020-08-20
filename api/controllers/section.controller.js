const BaseController = require('./base.controller');
const { SectionDTO } = require('../dtos');

class SectionController extends BaseController {

  constructor({ SectionService }) {
    super(SectionService, SectionDTO);
  }
}

module.exports = SectionController;