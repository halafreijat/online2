// 'use strict'
var hala = function() {
    var b;
    var a = prompt('choose a number');
    
      while( a !== '1' && a !== '0') {
          a = promit ('please pick 1 or 0');
      
          if (a == 1) {
          b = 'win';
          }
          else if( a == 0) {
          b = 'lose';
          }
      }
  return b;
  };
  
  