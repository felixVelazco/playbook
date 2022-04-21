const User = require("./../user");

class UserService{
  static create(id, username, name){
    return new User(id, name, username, "Default");
  }
}

module.exports = UserService;