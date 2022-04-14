const trendingTopic = {
  tendencia:"Elecciones",
  hashtag:"#Felix4President",
  tweets:"410,7 mil Tweets",
  country:"Mexico",
  place:1,

  getHashtagAndTweets:function(){
    return `El hashtag "${this.hashtag}" tiene ya ${this.tweets}`;
  },
  getPlaceAndCountry: function(){
    return `En ${this.country} ocupa el lugar #${this.place}`;
  }
}
console.log(trendingTopic.tendencia);
console.log(trendingTopic.getHashtagAndTweets());
console.log(trendingTopic.getPlaceAndCountry());

