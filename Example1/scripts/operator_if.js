/if..else

var company = prompt('Каково официальное название JS ?',' ');
if (company =='EcmaScript') {
  console.log('Верно!');
  }
  else {
    console.log('Не знаете? "EcmaScript!"');

/operator '?'

var answer;
var company = prompt('Каково официальное название JS ?',' ');
answer = (company=='EcmaScript')? 'Верно!':
'Не знаете? "EcmaScript!"';

/next example

var question= prompt('Введите число', '');
if (question>0) {
  console.log(1);
}else if (question<0) {
  console.log(-1);
} else {
  console.log(0);
};

/next example

var message;
var login;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
};

/operator '?'

var login=prompt('Кто он?');
var message=(login=='Вася') ? 'Привет':
(login=='Директор') ? 'Здравствуйте' :
(login=='') ? 'Нет логина':
'';
console.log(message);
