// Profile 
const profile = {
  name: "Felix",
  address:"calle 123, colonia, 4567",
  viajes: 37,

  getName: function(){
    return this.name;
  },
  getLocation: function(){
    return this.location;
  },
}

console.log(`Nombre: ${profile.getName()}`);
console.log(`Ubicación: ${profile.getLocation()}`);
