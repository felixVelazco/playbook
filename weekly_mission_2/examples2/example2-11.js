// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18,17]
const age = ages.find((age) => age < 37)
console.log("Ejemplo 11: Primera edad menor a 18 es: "+ age)