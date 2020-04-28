const { asClass, createContainer, asFunction, asValue } = require('awilix');
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

const {UserController} = require('./controllers')
const Routes = require('./routes')
const UserRoutes = require('./routes/user.routes');

const container = createContainer();
// Inversion of control ( registering dependency injection )

container.register({
  app: asClass(StartUp).singleton(),
  server: asClass(Server).singleton()
})
.register({
  UserController: asClass(UserController).singleton()
})
.register({
  router: asFunction(Routes).singleton()
})
.register({
  config: asValue(config)
})
.register({
  UserRoutes: asFunction(UserRoutes).singleton()
})

module.exports = container;