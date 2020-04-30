const mapper = require('automapper-js');
const { UserDTO } = require('../dtos');
class UserController {

  constructor({ UserService }) {
    this._userService = UserService;
  }

  sayHello(req, res) {
    return res.send({ message: 'hola mundo' });
  }

  async getUsers(req, res) {
    let users = await this._userService.getUsers();
    users = users.map(user => mapper(UserDTO, user));

    return res.status(200).send({
      payload: users
    });
  }

  async getUser(req, res) {
    const { id } = req.params;
    let user = await this._userService.getUser(id);
    user = mapper(UserDTO, user);

    return res.status(200).send({
      payload: user
    });
  }

  async createUser(req, res) {
    const { body } = req;
    let createdUser = await this._userService.createUser(body);
    createdUser = mapper(UserDTO, createdUser);
    
    return res.status(201).send({
      payload: createdUser
    });
  }

  async updateUser(req, res) {
    const { body } = req;
    const { id } = req.params;
    let updatedUser = await this._userService.updateUser(id, body);
    updatedUser = mapper(UserDTO, updatedUser);
    
    return res.status(204).send({
      payload: updatedUser
    });
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    let deletedUser = await this._userService.deleteUser(id);
    deletedUser = mapper(UserDTO, deletedUser);
    
    return res.status(204).send({
      payload: deletedUser
    });
  }
}

module.exports = UserController;