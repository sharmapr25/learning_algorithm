/*
Using Euclid's algorithm
*/
const gcd = (num1, num2) => {
  while(num2 !== 0){
    temp = num1;
    num1 = num2;
    num2 = temp % num2;
  }
  return num1;
}

console.log(gcd(20,8));  //should be 4
console.log(gcd(60,96)); //should be 12