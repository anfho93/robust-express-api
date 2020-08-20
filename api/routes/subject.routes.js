const { Router } = require('express');

module.exports = function ({ SubjectController }) {
  const router = Router();
  // Subject routes
  router.get('/', SubjectController.getAll.bind(SubjectController));
  router.post('/', SubjectController.create.bind(SubjectController));
  router.get('/:id', SubjectController.get.bind(SubjectController));
  router.put('/:id', SubjectController.update.bind(SubjectController));
  router.delete('/:id', SubjectController.delete.bind(SubjectController));
  return router;
}