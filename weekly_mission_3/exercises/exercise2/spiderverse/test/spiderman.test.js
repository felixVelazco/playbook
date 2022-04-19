const Spiderman = require("../app/spiderman")

describe("Unit tests for Spiderman Class", ()=>{
  test("1) Create an spiderman Object", ()=> {
    const tomHolland = new Spiderman("Spiderman Disney", 25, "Tom Holland", 3, "Marvel");

    expect(tomHolland.name).toBe("Spiderman Disney");
    expect(tomHolland.age).toBe(25);
    expect(tomHolland.actor).toBe("Tom Holland");
    expect(tomHolland.movies).toBe(3);
    expect(tomHolland.studio).toBe("Marvel");
  })
})