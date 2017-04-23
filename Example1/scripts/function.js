function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  console.log('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  console.log( pow(x, n) );
}

// функция которая возвращает меньшее из чисел a,b.

    function min (a,b) {
  if (a<b) {
    return a;
  } else {
    return b;
  }
}
