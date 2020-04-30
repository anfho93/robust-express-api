// Inversion of control ( registering dependency injection )
const { asClass, createContainer, asFunction, asValue } = require('awilix');

// aplication start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

// routes
const Routes = require('./routes')
const UserRoutes = require('./routes/user.routes');

// repos
const { UserRepository } = require('../dal/repositories');

// controllers
const { UserController } = require('./controllers')

// bussiness
const { UserBussiness } = require('../domain')

// services
const { UserService } = require('../services');

// Container creation
const container = createContainer();
const db = require('../dal/entities')

container.register({
  app: asClass(StartUp).singleton(),
  router: asFunction(Routes).singleton(),
  server: asClass(Server).singleton(),
  UserController: asClass(UserController).singleton(),
  UserRoutes: asFunction(UserRoutes).singleton()
})
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db)
  })
  .register({
    UserService: asClass(UserService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton()
  })
  .register({
    UserBussiness: asClass(UserBussiness).singleton()
  })

module.exports = container;