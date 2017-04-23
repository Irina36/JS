var s1 = "36";
var s2 = "200";

function reverse(str) {
  return str.split('').reverse().join('');
}

function comparison (str1, str2) {

  if (str1.length > str2.length) 
    return false;
  if (str1.length < str2.length) 
    return true;
  if (str1.length == str2.length) {
      
    for (i=0; i < str1.length; i++) {
      
      if (Number(str1[i]) < Number(str2[i])) {
       return true;
      } else      
      if (Number(str1[i]) > Number(str2[i])) {
        return false;
      } else        
      if (Number(str1[i])== Number(str2[i])) {
        continue;
      }        
    }
  }    
}

var isGreater = comparison (s1, s2);
var result = '';
var d = 0;
var value = false;

if (isGreater) {
value = true;
var num1 = reverse(s2);
var num2 = reverse(s1);
} else {
 num1 = reverse(s1);
 num2 = reverse(s2);
}

for (var i = 0; i < Math.max(num1.length, num2.length); i++) {
  var a = num1[i];
  var b = num2[i];
  if (a == undefined) {
    a = 0;
  }
  if (b == undefined) {
    b = 0;
  }
  var c = a - b + d;

  if (c < 0) {
   value = true;
    d = -1;
    result = (c + 10).toString() + result;
  } else {
    d = 0;
    result = c.toString() + result;
  }
}

var result_no_zeros = '';
var remove_zero = true;
for (var i = 0; i < result.length; i++) {
  var current = Number(result[i]);
  if ((current > 0) && remove_zero) {
    remove_zero = false;
  }
  if (remove_zero) {
    continue;
  }
  result_no_zeros = result_no_zeros + result[i];
}

if (value) {
result_no_zeros = '-' +  result_no_zeros;
}
console.log(result_no_zeros);
