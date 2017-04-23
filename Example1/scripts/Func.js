
function isPrime (num) {
  for(var i=0; i<num; i++) {
        if(num % i === 0)
          return false;
  }
    return true;
}


function getPrime(m) {
  var i = 0;
  var j = 0;
  if (Number.isNaN(Number(m)) ) { return; };
  while (true) {
    i++;
    if (isPrime(i)) {
       j++;
    }
    if (j >= Number(m)) {
      return i;
    }
  }
}

function Formalizator(n) {
  var i = 2;
  while (n>1) {
    var prime=getPrime(i);
    if (n % prime === 0) {
      n= n / prime;
     console.log(prime);
    } else {
      i++;
    }
  }
}
