const hashtag = {
  name: "#tacosAlPastor",
  isTrending: true,
  tweets:"16.5 millones tweets",

  getNameAndTweets: function(){
    return `El hashtag ${this.name} tiene ya ${this.tweets}`;
  },
  getIsTrending: function(){
    return this.isTrending;
  }
}

console.log(hashtag.getNameAndTweets());
console.log("Está actualmente en tendencia: " + hashtag.getIsTrending());
