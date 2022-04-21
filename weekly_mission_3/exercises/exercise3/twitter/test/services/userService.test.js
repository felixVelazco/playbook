const UserService = require("./../../app/services/userService");

describe('Unit test suite',() =>{
  test('1) Crear un objeto', () => {
    const felix = UserService.create(1, "felixvv7", "felix velazco");
    expect(felix.id).toBe(1);
    expect(felix.username).toBe("felixvv7");
    expect(felix.name).toBe("felix velazco");
  })
});
