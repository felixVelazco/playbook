export default class User {
  constructor(name, nickname, email){
    this.name = name;
    this.nickname =nickname;
    this.email = email;
    this.friends = 578,
    this.birthday= "29 de mayo";
  }

  getNameAndNickname(){
    return `Nombre: ${this.name}\nApodo: ${this.nickname}\n`
  }
  getBirthDay() {
    return this.birthday;
  }
}