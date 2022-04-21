const UserService = require("./../../app/services/userService");

describe('Unit test suite',() =>{
  test('1) Crear un objeto', () => {
    const userFelix = UserService.create(1, "felixvv7", "felix velazco");
    expect(userFelix.id).toBe(1);
    expect(userFelix.username).toBe("felixvv7");
    expect(userFelix.name).toBe("felix velazco");
  })
  test('2) Try get Functions', () => {
    const userFelix = UserService.create(1, "felixvv7", "felix velazco");
    const userInfo = UserService.getInfo(userFelix);
    expect(userInfo[0]).toBe(1);
    expect(userInfo[1]).toBe("felixvv7");
    expect(userInfo[2]).toBe("felix velazco");
    expect(userInfo[3]).toBe("Default");
  })
});
