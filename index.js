// Create index.js and Write Prime Number Function
function prime(num){
    if(num <= 1) return false;// Not prime
    for(let i=2; i < num;i++){
        if(num % i == 0) return false; //Divisible, not prime
   
    }

return true;// prime
}
console.log(prime(2)); // true
console.log(prime(15)); // false