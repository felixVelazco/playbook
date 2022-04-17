import Post from "../post";

const post1 = new Post("felix velazco", "me voy a casar");
const post2 = new Post("eduardo vazquez", "miren este meme");

test("1) Verify getAuthor", ()=>{
  expect(post1.getAuthor()).toBe("felix velazco");
  expect(post2.getAuthor()).toBe("eduardo vazquez");
})

test("2) Verify content", ()=>{
  expect(post1.content).toBe("me voy a casar");
  expect(post2.content).toBe("miren este meme");
})

test("3) Verify getPeopleTagged", ()=>{
  expect(post1.getPeopleTagged()).toStrictEqual(["novia", "mejor amigo 1", "mejor amigo 2"]);
})

test("4) Verify getReactions", ()=>{
  expect(post1.getReactions()).toStrictEqual([
    {name: "like", value: 15},
    {name: "love", value: 350},
    {name: "haha", value: 1},
    {name: "wow", value: 261},
    {name: "sad", value: 0},
    {name: "angry", value: 2},
  ]);
})

test("5) Verify getTotalReactions", ()=>{
  expect(post1.getTotalReactions()).toBe(629);
})

test("6) Verify getPlace", ()=>{
  expect(post1.getPlace()).toBe("Venice, Italy");
})



