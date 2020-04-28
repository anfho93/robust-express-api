class UserController {

  constructor({UserService}) {
    this._userService = UserService;
  }

  sayHello(req, res) {
    return res.send({message: 'hola mundo'});
  }

  async getUsers() {
    // services talks to the repository
    return await this._userService.getUsers();
  }
  
}

module.exports = UserController;