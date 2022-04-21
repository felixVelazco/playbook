class UserView{
  static createUser(payload){
    if(payload === null){
      return {error: "Error: El payload no existe. Inténtelo nuevamente"}
    }    
  }
}

module.exports = UserView;