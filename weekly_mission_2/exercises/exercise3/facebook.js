class User {
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

class Biography {
  constructor(user, nickname){
    this.user = user;
    this.nickname = nickname;
    this.friends= 537;
    this.birthday = "29 de mayo";
    this.relationship = "Single";
    this.city = "Juarez";
    this.job = "Engineer";
    this.isProfilePublic = false;
  }
  getUserName(){
    return this.user;
  }
  getBirthday(){
    return this.birthday;
  }
  getRelationshipStatus(){
    return this.relationship;
  }
  getIsProfilePublic(){
    return this.isProfilePublic;
  }
}

class Post {
  constructor(author, content){
    this.author = author;
    this.content = content;
    this.reactions = [
      {name: "like", value: 15},
      {name: "love", value: 350},
      {name: "haha", value: 1},
      {name: "wow", value: 261},
      {name: "sad", value: 0},
      {name: "angry", value: 2},
    ];
    this.comments = 78;
    this.img = ["anillo.jpg", "fotoPareja.jpg"];
    this.peopleTagged = ["novia", "mejor amigo 1", "mejor amigo 2"];
    this.feeling = "In love";
    this.imHere = "Venice, Italy";
    this.importantAchievement = "Commited";
  }
  getAuthor(){
    return this.author;
  }
  getPeopleTagged(){
    return this.peopleTagged;
  }
  getReactions(){
    return this.reactions;
  }
  getPlace(){
    return this.imHere;
  }
  getTotalReactions(){
    const suma = this.reactions.reduce((acc, num) => acc + num.value, 0);
    return suma;
  }
}

const userFelix = new User('Jose Felix', "Felix", "jose@correo.com");
console.log(userFelix);
console.log(userFelix.getNameAndNickname());



const biographyFelix = new Biography('Jose Felix', "Felix");
console.log(biographyFelix);
console.log("El perfil es público?");
console.log(biographyFelix.getIsProfilePublic());



const postFelix = new Post("Felix Velazco", "Me voy a casar!");
console.log(postFelix);
console.log("Reacciones: ");
console.log(postFelix.getReactions());
console.log("Total: "+postFelix.getTotalReactions());




