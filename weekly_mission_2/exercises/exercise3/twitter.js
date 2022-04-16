class User {
  constructor(name, username, age, email){
    this.name = name;
    this.username = username;
    this.age = age;
    this.email = email;
    this.followers =4;
    this.follow=62;
    this.description="";
    this.dateJoined= "2018-6-23";
  }
    getNameAndUsername() {
      return `Name: ${this.name}\nUsername: ${this.username}`;
    }
    getFollowersAndFollows() {
      return `Followers: ${this.followers}\nFollows: ${this.follow}`;   
    }
    getDateJoined() {
      return this.dateJoined;
    }
}

class TrendingTopic{
  constructor(hashtag){
    this.hashtag = hashtag;
    this.tendencia = "Elecciones";
    this.tweets = 410700;
    this.country = "Mexico";
    this.place = 1;
  }
  getHashtagAndTweets(){
    return `El hashtag "${this.hashtag}" tiene ya ${this.tweets}`;
  }
  getPlaceAndCountry(){
    return `En ${this.country} ocupa el lugar #${this.place}`;
  }
}

class Hashtag{
  constructor(name){
    this.name = name;
    this.isTrending = true;
    this.tweets = 16500000;
  }
  getNameAndTweets(){
    return `El hashtag ${this.name} tiene ya ${this.tweets}`;
  }
  getIsTrending(){
    return this.isTrending;
  }
}

//Crear el objeto tipo User
const user = new User("Felix Velazco", "@FelixVelazco1", 25, "felix@correo.com");
console.log(user);
console.log(user.getNameAndUsername());

//Crear el objeto tipo TrendingTopic
const trendingFelix = new TrendingTopic("#Felix4President");
console.log(trendingFelix);
console.log(trendingFelix.getPlaceAndCountry());

//Crear el objeto tipo Hashtag
const hashtagFelix = new Hashtag("#tacosAlPastor");
console.log(hashtagFelix);
console.log(hashtagFelix.getNameAndTweets());


