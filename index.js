// Create index.js and Write Prime Number Function
function prime(num){
    if(num <= 1) return false;// Not prime
    for(let i=2; i < num;i++){
        if(num % i == 0) return false; //Divisible, not prime
   
    }

return true;// prime
}
function evenOdd(num){
    return num % 2===0; // returns true if the number is even ,false if odd
}
console.log(prime(2)); // true
console.log(prime(15)); // false
console.log(evenOdd(1));//false
console.log(evenOdd(2));//true