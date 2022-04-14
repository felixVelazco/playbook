//Post
const post = {
  author: "Felix Velazco",
  content:"Me voy a casar",
  reactions: [
    {name: "like", value: 15},
    {name: "love", value: 350},
    {name: "haha", value: 1},
    {name: "wow", value: 261},
    {name: "sad", value: 0},
    {name: "angry", value: 2},
  ],
  comments: 78,
  img: ["anillo.jpg", "fotoPareja.jpg"],
  peopleTagged:["novia", "mejor amigo 1", "mejor amigo 2"],
  feeling:"In love",
  imHere:"Venice, Italy",
  importantAchievement:"Commited",

  getAuthor: function(){
    return this.author;
  },
  getPeopleTagged: function(){
    return this.peopleTagged;
  },
  getReactions: function(){
    return this.reactions;
  },
  getPlace: function(){
    return this.imHere;
  },
  getTotalReactions: function(){
    const suma = this.reactions.reduce((acc, num) => acc + num.value, 0);
    return suma;
  },
}
console.log("Autor del post: "+post.getAuthor());
console.log("Contenido: "+post.content);
console.log("Gente etiquetada: "+post.getPeopleTagged());
console.log("Lugar: "+post.getPlace());

console.log("Reacciones totales: " + post.getTotalReactions());
console.log("Reacciones por tipo:");
console.log(post.getReactions());
