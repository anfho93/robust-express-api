const { Router } = require('express');

module.exports = function ({ SectionController }) {
  const router = Router();
  // Section routes
  router.get('/', SectionController.getAll.bind(SectionController));
  router.post('/', SectionController.create.bind(SectionController));
  router.get('/:id', SectionController.get.bind(SectionController));
  router.put('/:id', SectionController.update.bind(SectionController));
  router.delete('/:id', SectionController.delete.bind(SectionController));
  return router;
}