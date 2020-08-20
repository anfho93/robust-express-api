const { Router } = require('express');

module.exports = function ({ CourseController }) {
  const router = Router();
  // Course routes
  router.get('/', CourseController.getAll.bind(CourseController));
  router.post('/', CourseController.create.bind(CourseController));
  router.get('/:id', CourseController.get.bind(CourseController));
  router.put('/:id', CourseController.update.bind(CourseController));
  router.delete('/:id', CourseController.delete.bind(CourseController));
  return router;
}