// Twitter exercise
const user = {
  name:"Felix Velazco",
  username:"@FelixVelazco",
  age:25,
  email:"felix@correo.com",
  followers:4,
  follow:62,
  description:"",
  dateJoined:"2018-6-23",

  getNameAndUsername: function() {
    return `Name: ${this.name}\nUsername: ${this.username}`
  },
  getFollowersAndFollows: function() {
    return `Followers: ${this.followers}\nFollows: ${this.follow}`;   
  },
  getDateJoined: function() {
    return this.dateJoined;
  }
}

console.log(user.getNameAndUsername());
console.log(user.getFollowersAndFollows());
console.log(user.name + " joined on: "+user.getDateJoined());