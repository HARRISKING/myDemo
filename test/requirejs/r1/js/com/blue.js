    define(['jquery'],function($){

      function turnBlue(){
        $('.btn1').on('click',function(){
          $('.box').css('background-color','blue')
        })
      }

      return turnBlue;
    })
