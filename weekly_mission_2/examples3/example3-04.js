// Ejemplo 4: Métodos en los objetos
class Repository {
  constructor(name, author, language, stars){
   this.name = name
   this.author = author
   this.language = language
   this.stars = stars
  }

  getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
    return `repository ${this.name} has ${this.stars} stars. His author is ${this.author}`
  }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "felix", "js", 32)
console.log(myRepo.getInfo())