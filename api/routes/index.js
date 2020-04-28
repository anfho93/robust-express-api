const { Router } = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = function ({ UserRoutes }) {
  const router = Router();
  const apiRoutes = Router();

  apiRoutes
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  // Add Api routes
  apiRoutes.use('/user', UserRoutes);

  // Add routes from the apps.
  router.use('/api', apiRoutes);

  return router;

}