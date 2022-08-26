function Persona(name, weight, height) {
  this.weight = weight,
  this.name = name,
  this.height = height
};
Persona.prototype.saludar = function (name) {
  return `Hola ${name}, me llamo ${this.name}`;
};
Persona.prototype.bmi = function () {
  return this.weight/(this.height ** 2);
};
const pedro = new Persona("Pedro", 72, 1.5);
console.log(pedro.saludar("Maria"));
console.log(pedro.bmi());