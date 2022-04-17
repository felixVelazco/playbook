import User from "../user.js";

const myUser = new User("felix velazco", "felix", "felix@correo.com");
const myUser2 = new User("eduardo vazquez", "lalo", "eduardo@correo.com");

test("1) Verify name", ()=>{
  expect(myUser.name).toBe("felix velazco");
  expect(myUser2.name).toBe("eduardo vazquez");
});

test("2) Verify nickname", ()=>{
  expect(myUser.nickname).toBe("felix");
  expect(myUser2.nickname).toBe("lalo");
})

test("3) Verify email", ()=>{
  expect(myUser.email).toBe("felix@correo.com");
  expect(myUser2.email).toBe("eduardo@correo.com");
})

test("4) Verify functions", ()=>{
  expect(myUser.getNameAndNickname()).toBe("Nombre: felix velazco\nApodo: felix\n");
  expect(myUser.getBirthDay()).toBe("29 de mayo");
})
