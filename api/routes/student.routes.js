const { Router } = require('express');

module.exports = function ({ StudentController }) {
  const router = Router();
  // Student routes
  router.get('/', StudentController.getAll.bind(StudentController));
  router.post('/', StudentController.create.bind(StudentController));
  router.get('/:id', StudentController.get.bind(StudentController));
  router.put('/:id', StudentController.update.bind(StudentController));
  router.delete('/:id', StudentController.delete.bind(StudentController));

  return router;
}