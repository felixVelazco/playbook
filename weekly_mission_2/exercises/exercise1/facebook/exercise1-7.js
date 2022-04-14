//User
const user = {
  name: "Jose Velazco",
  nickname: "Pepe",
  friends: "578",
  email:"jose@correo.com",
  birthday:"29 de mayo",

  getNameAndNickname: function(){
    return `Nombre: ${this.name}\nApodo: ${this.nickname}\n`
  },
  getBirthDay: function () {
    return this.birthday;
  }
}

console.log(user.getNameAndNickname());
console.log("Cumpleaños: " + user.getBirthDay());
console.log("Amigos: " + user.friends);
