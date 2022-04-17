export default class Post {
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