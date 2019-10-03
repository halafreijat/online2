// 'use strict'
function hala() {
    var b;
    var a = prompt('choose a number');
    
      while( a !== 'one' && a !== 'zero') {
          prompt('please pick one or zero');
      }

          if (a == 'one') {
          b = 'win';
          }
          else if( a == 'zero') {
          b = 'lose';
          }
      
  return b;
  }
  
  