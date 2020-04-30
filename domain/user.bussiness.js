const autoMapper = require('automapper-js');
const { User } = require('./models');
class UserBussiness {

  constructor({ UserRepository }) {
    this._userRepository = UserRepository;
  }

  async getUsers() {
    const users = await this._userRepository.getUsers();
    // from sqlelize to json to map model
    return users.map(user => autoMapper(User, user.toJSON()));
  }

  async getUser(id) {
    const user = await this._userRepository.getUser(id);
    return autoMapper(User, user.toJSON());
  }

  async createUser(user) {
    //review
    user = autoMapper(User, user);
    //sends a db user entity
    const createdUser = await this._userRepository.createUser(user);
    // returns a domain entity to the controller
    return autoMapper(User, createdUser);
  }

  async updateUser(id, user) {
    user.id = id;
    user = autoMapper(User, user);
    //sends a db user entity
    const updatedUser = await this._userRepository.updateUser(id, user);
    // returns a domain entity to the controller
    return autoMapper(User, updatedUser);
  }

  async deleteUser(id) {
    //sends a db user entity
    return await this._userRepository.deleteUser(id);    
  }
}


module.exports = UserBussiness;