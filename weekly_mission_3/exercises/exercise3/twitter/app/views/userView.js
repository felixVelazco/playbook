class UserView{
  static createUser(payload){
    if(payload === null){
      return {error: "Error: El payload no existe. Inténtelo nuevamente"}
    }
    //Solo aplica con 3 parametros
    // if(payload.id === null || payload.username === null || payload.name ===null){
    //   return {error: "Error: Los valores del payload necesitan tener un valor válido. Inténtelo nuevamente"}
    // }

    //Con n parametros
     const list = Object.values(payload);
     
     for(let i=0; i<list.length; i++){
      if(list[i]===null)
        return {error: "Error: Los valores del payload necesitan tener un valor válido. Inténtelo nuevamente"}
     }
    return {error: "no error"};
  }
}

module.exports = UserView;