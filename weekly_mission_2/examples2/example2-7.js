// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByay = countries.filter((country) => country.endsWith('ay'))
console.log("Ejemplo 7: Paises que terminan en ay")
console.log(countriesEndsByay)