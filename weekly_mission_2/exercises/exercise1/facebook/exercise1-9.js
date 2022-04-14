//biography
const biography = {
  user: "felix velazco",
  nickname: "felix",
  friends: 537,
  birthday:"29-mayo",
  relationship: "single",
  city:"Juarez",
  job: "Engineer",
  isProfilePublic: false,

  getUserName: function(){
    return this.user;
  },
  getBirthday: function(){
    return this.birthday;
  },
  getRelationshipStatus: function(){
    return this.relationship;
  },
  getIsProfilePublic: function(){
    return this.isProfilePublic;
  }
}

console.log("Name: ");
console.log(biography.getUserName());
console.log("Birthday: ");
console.log(biography.getBirthday());
console.log("Relationship: ");
console.log(biography.getRelationshipStatus());
console.log("Is profile public?: ");
console.log(biography.getIsProfilePublic());
