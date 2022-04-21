const UserView = require('./../../app/views/userView');

describe('Tests for UserView',() =>{
  test('1) Payload is null', () => {
    const user = UserView.createUser(null);
    //Al usar toMatch, verifica que la frase exista en una cadena mas larga.
    expect(user.error).toMatch('payload no existe');
  })

})