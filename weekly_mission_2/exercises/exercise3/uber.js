class Profile{
  constructor(name, address){
    this.name = name;
    this.address = address;
    this.viajes=37;
  }
  getName(){
    return this.name;
  }
  getLocation(){
    return this.address;
  }
}
class Travel {
  constructor(origin, destiny, payment_method){
    this.origin = origin;
    this.destiny = destiny;
    this.payment_method = this.payment_method;
    this.aprox_price = 100;
    this.isRainy = false;
    this.travel_choice = "UberX";
    this.user = "felix";
    this.driver = "Jose";
    this.car = "Ferrari";
    this.color_car = "Red";
    this.license_plate = "123-456";
  }
  getOriginAndDestiny(){
    return `Origen: ${this.origin}\nDestino: ${this.destiny}\n`
  }
  getUserName(){
    return `Usuario: ${this.user}`;
  }
  getDriverInfo(){
    return `Nombre del conductor: ${this.driver}\nModelo de carro: ${this.car}\nColor del carro: ${this.color_car}\nNúmero de placa: ${this.license_plate}\n`
  }
}

const felixProf = new Profile("Felix Velazco", "Calle 123, colonia, 4567");
console.log(felixProf);
console.log("Location");
console.log(felixProf.getLocation());

const felixTravel = new Travel("Punto A", "Punto B", "Efectivo");
console.log(felixTravel);
console.log(felixTravel.getOriginAndDestiny());

