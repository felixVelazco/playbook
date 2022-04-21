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
  test('3) Try UpdateUserUsername function', () =>{
    const userFelix = UserService.create(1, "felixvv7", "felix velazco");
    UserService.updateUserUsername(userFelix, "felixRey");
    expect(userFelix.username).toBe("felixRey");
  })
  test('4) Try getAllUsernames function', () => {
    const user1 = UserService.create(1, "user1", "felix1");
    const user2 = UserService.create(2, "user2", "felix2");
    const user3 = UserService.create(3, "user3", "felix3");

    const allUsernames = UserService.getAllUsernames([user1, user2, user3]);
    
    expect(allUsernames).toContain("user1");
    expect(allUsernames).toContain("user2");
    expect(allUsernames).toContain("user3");
  })
});
