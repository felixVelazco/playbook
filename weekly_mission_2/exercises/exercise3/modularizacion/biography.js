export default class Biography {
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