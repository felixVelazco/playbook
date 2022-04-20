const User = require("./../app/user.js")

describe("Unit suite para la clase usuario", ()=> {
  test("1) Crear un objeto", ()=>{
    const felixUser = new User(1, "felix velazco", "felixvv7", "just a normal guy");
    expect(felixUser.name).toBe("felix velazco");
    expect(felixUser.username).toBe("felixvv7");
    expect(felixUser.bio).toBe("just a normal guy");
  })
})

