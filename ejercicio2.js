
function Auto() {
  this.velocidad = 0
};
Auto.prototype.acelerar = function (num) {
  return this.velocidad += num;
};
Auto.prototype.frenar = function (num) {
  this.velocidad -= num;
  if (this.velocidad < 0) {
    return this.velocidad = 0;
  } else {
    return this.velocidad;
  };
};
const a1 = new Auto();
console.log(a1.velocidad);

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad);

a1.frenar(2);
console.log(a1.velocidad);

a1.frenar(3);
console.log(a1.velocidad);