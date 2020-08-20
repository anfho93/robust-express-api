const { Section } = require('./models');
const BaseBussiness = require('./base.bussiness');

class SectionBussiness extends BaseBussiness {

  constructor({ SectionRepository }) {
    super(SectionRepository, Section);
  }

}

module.exports = SectionBussiness;