function rev(x) {
  var reversed_x='';
  for (var i=0; i<x.length; i++) {
    reversed_x=x[i]+reversed_x;
  }
}

function sum(a,b) {

// объявляем переменные локальные, преобразовав входные параметры согласно функции rev, 
// то есть зеркально отражаем передаваемые значения в параметрах num_a, num_b  

  var c=''
  var num_a=rev(a);
  var num_b=rev(b);
  var sum_before = 0;
  
// каждый символ num_a складываем с символом num_b по порядку начиная с первого

  for (i=0; i < Math.max(num_a.length, num_b.length); i++) {
    var a_i = num_a[i];
    var b_i = num_b[i]
    if (a_i === undefined ){ //если следующий по порядку символ num_a не имеет значения
      a_i = 0;       // то приравниваем к нулю
    }
    if(b_i === undefined){ //если следующий по порядку символ num_b  не имеет значения
      b_i = 0; // то приравниваем к нулю
    }
    //в переменную заносим результат сложения каждого символа передаваемых параметров, преобразуем их в строку 
    //заранее подразумеваем, что возможно полуения двузначного числа при сложении, поэтому один из операндов sum_before
    
    var sum_i = (Number(sum_before) + Number(a_i) + Number(b_i)).toString();
    
    //проверяем результат сожения на двузначность: если получилось двузначное число, 
    // то исключаем первый символ и в результирующую строку выводим второй символ
    
    if (sum_i.length > 1) {
      sum_before = Number(sum_i[0]);
      c = c + sum_i[1];
    } else {   // иначе второй член двузначного результата  = 0  и в результирующу строку выводим то что получилось при сложении, то есть однозначное число
      sum_before = 0;
      c = c + sum_i;
    }
  }
  // прибавляем остаток
   
  if (sum_before > 0) {
    c = c + sum_before;
  }
  return rev(c);
}
