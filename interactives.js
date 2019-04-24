$(function(){
    $('#info1').click(function(){
      document.querySelector('#info1text').emit('popup');
    });
    
    $('#info2').click(function(){
      document.querySelector('#info2text').emit('popup');
    });
  
  $('#info3').click(function(){
      document.querySelector('#info1text').emit('popup');
    });
  });
