const { Router } = require('express');

module.exports = function ({ TeacherController }) {
  const router = Router();
  // Teacher routes
  router.get('/', TeacherController.getAll.bind(TeacherController));
  router.post('/', TeacherController.create.bind(TeacherController));
  router.get('/:id', TeacherController.get.bind(TeacherController));
  router.put('/:id', TeacherController.update.bind(TeacherController));
  router.delete('/:id', TeacherController.delete.bind(TeacherController));
  return router;
}