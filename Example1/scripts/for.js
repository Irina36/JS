for (var i = 2; i < 10; i++) {
  var value=true; 
  for (var j = 2; j < i; j++) {      
    
    if (i % j == 0) {
      value=false;
    }
  }

  if (value) {
    console.log(i); 
  }
}

for (var i = 2; i < 10; i++) {
  var value=false; 
  for (var j = 2; j < i; j++) {      
    
    if (i % j == 0) {
      value=true;
      break; /// PRAVILNEE
    }
  }

  if (!value) {
    console.log(i); 
  }
}



