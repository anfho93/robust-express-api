const container = require('./api/container');

const application = container.resolve('app');
// db object
const db = container.resolve('db');

application.start().then(async () => {
  console.log('Environment', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    await db.sequelize.sync();
  }
}).catch(err => {
  console.log(err);
  process.exit();
});