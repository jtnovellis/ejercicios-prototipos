String.prototype.palindrome = function () {
  const newStr = this.toLowerCase().split('');
  const arr1 = newStr.filter(e => e === ' ' ? 1 : 0);
  const arr2 = arr1.reverse();
  let result = false;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    };
  };
  return result;
};

console.log("anita lava la tina".palindrome());
console.log("prueba".palindrome());