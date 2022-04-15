//travel
const travel = {
  origin: "ubicacion A",
  destiny:"ubicacion B",
  aprox_price: 100,
  payment_method:"efectivo",
  isRainy: false,
  travel_choice: "UberX",
  user: "felix",
  driver: "Jose",
  car:"ferrari",
  color_car:"red",
  license_plate: "123-456",

  getOriginAndDestiny: function(){
    return `Origen: ${this.origin}\nDestino: ${this.destiny}\n`
  },
  getUserName: function(){
    return `Usuario: ${this.user}`;
  },
  getDriverInfo: function(){
    return `Nombre del conductor: ${this.driver}\nModelo de carro: ${this.car}\nColor del carro: ${this.color_car}\nNúmero de placa: ${this.license_plate}\n`
  }
}

console.log(travel.getUserName());
console.log(travel.getOriginAndDestiny());
console.log(travel.getDriverInfo());
console.log("Precio del viaje: $"+travel.aprox_price);
