const User = require("./../app/user.js")


describe("Unit suite para la clase usuario", ()=> {
  const felixUser = new User(1, "felix velazco", "felixvv7", "just a normal guy");
  
  test("1) Crear un objeto", ()=>{
    expect(felixUser.id).toBe(1);
    expect(felixUser.name).toBe("felix velazco");
    expect(felixUser.username).toBe("felixvv7");
    expect(felixUser.bio).toBe("just a normal guy");
  })

  test("2) Test getUsername funtion", ()=>{
    expect(felixUser.getUsername).toBe("felixvv7");  
  })
  
  test("3) Test getBio function", ()=>{
    expect(felixUser.getBio).toBe("just a normal guy");  
  })

  test("4) Test getDateCreated function", ()=>{
    expect(felixUser.getDateCreated).not.toBeUndefined();  
  })
 
  test("5) Test getLastUpdated function", ()=>{
    expect(felixUser.getLastUpdated).not.toBeUndefined();  
  })
  test("6) Test setters function", ()=> {
    felixUser.setUsername = "felix10"
    expect(felixUser.username).toBe("felix10");
    
    felixUser.setBio = "Pudin";
    expect(felixUser.bio).toBe("Pudin");
  })
  
})

