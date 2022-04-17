import Biography from "../biography";

const bio = new Biography("felix velazco", "felix");
const bio2 = new Biography("eduardo vazquez", "lalo");

test("1) Verify name", ()=>{
  expect(bio.user).toBe("felix velazco");
  expect(bio2.user).toBe("eduardo vazquez");
})

test("2) Verify nickname", ()=>{
  expect(bio.nickname).toBe("felix");
  expect(bio2.nickname).toBe("lalo");
})

test("3) Verify getUserName", ()=>{
  expect(bio.getUserName()).toBe("felix velazco");
})
test("4) Verify getBirthday", ()=>{
  expect(bio.getBirthday()).toBe("29 de mayo");
})
test("5) Verify getRelationshipStatus", ()=>{
  expect(bio.getRelationshipStatus()).toBe("Single");
})
test("6) Verify getIsProfilePublic", ()=>{
  expect(bio.getIsProfilePublic()).toBe(false);
})