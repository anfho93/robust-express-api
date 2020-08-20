const { Router } = require('express');

module.exports = function ({ RegistrationController }) {
  const router = Router();
  // Registration routes
  router.get('/', RegistrationController.getAll.bind(RegistrationController));
  router.post('/', RegistrationController.create.bind(RegistrationController));
  router.get('/:id', RegistrationController.get.bind(RegistrationController));
  router.put('/:id', RegistrationController.update.bind(RegistrationController));
  router.delete('/:id', RegistrationController.delete.bind(RegistrationController));
  return router;
}