const { Router } = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = function ({ StudentRoutes, TeacherRoutes, CourseRoutes }) {
  const router = Router();
  const apiRoutes = Router();

  apiRoutes
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  // Add Api routes
  apiRoutes.use('/student', StudentRoutes);
  apiRoutes.use('/teacher', TeacherRoutes);
  apiRoutes.use('/course', CourseRoutes);
  

  // Add routes from the apps.
  router.use('/api', apiRoutes);

  return router;

}