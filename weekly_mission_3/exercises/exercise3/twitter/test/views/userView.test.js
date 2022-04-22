const UserView = require('./../../app/views/userView');

describe('Tests for UserView',() =>{
  test('1) Payload is null', () => {
    const user = UserView.createUser(null);
    //Al usar toMatch, verifica que la frase exista en una cadena mas larga.
    expect(user.error).toMatch('payload no existe');
  })
  test('2) Username, name or ID is null', () => {
    const payload = {
      id: null,
      username: "felixvv7",
      name: "felix velazco"
    };
    const user = UserView.createUser(payload);
    expect(user.error).toMatch("necesitan tener un valor válido");
  })
  test("3) Test when you miss some arguments", () => {
    const payload = {username: "felixvv7", };
    const user = UserView.createUser(payload);
    expect(user.error).toMatch("necesitan tener un valor válido");
  })
  test("4) Create an Object", () => {
    const payload = {
      id: 1,
      username: "felixvv7",
      name: "felix velazco"
    }
    const user = UserView.createUser(payload);
    
    expect(user.id).toBe(1);
    expect(user.username).toBe("felixvv7");
    expect(user.name).toBe("felix velazco");
  })
})