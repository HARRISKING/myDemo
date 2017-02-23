  define(["jquery"],function(){
    var $ = require('jquery');



    function GoTop(ct,target){
      this.ct = ct;
      this.target = target;
      GoTop.prototype.createNode = function(){
        $(ct).append('<'+ target +' class="btn">回到顶部</' + target + '>');
      };
      GoTop.prototype.bindEvent = function(){
        $('.btn').on('click',function(){
          $(window).scrollTop(0);
        })
      }
    };
    return{
      var gotop = new GoTop('.content','button');
      gotop.createNode();
      gotop.bindEvent();    }


  })
