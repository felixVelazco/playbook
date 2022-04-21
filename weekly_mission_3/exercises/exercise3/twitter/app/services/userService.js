const User = require("./../user");

class UserService{
  static create(id, username, name){
    return new User(id, name, username, "Default");
  }
  static getInfo(user){
    const list = [user.id, user.username, user.name, user.bio]
    return list;
  }
  static updateUserUsername(user, newUsername){
    user.username = newUsername;
  }
}

module.exports = UserService;