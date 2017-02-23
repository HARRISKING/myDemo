//
// define(function(require,exports){
//     var $ = require('jquery');
//
//     var Exposure = (function(){
//
//
//       function Exposure($target,callback){
//         this.$target = $target;
//         this.callback = callback;
//         this.bind();
//         this.check();
//       };
//       Exposure.prototype.bind = function(){
//          var _this = this;
//          $(window).on('scroll',function(){
//            _this.check();
//          })
//       };
//       Exposure.prototype.check = function(){
//          if(this.isShow(this.$target)){
//            this.callback(this.$target);
//         }
//       };
//        Exposure.prototype.isShow = function(){
//          var scrollTop = $(window).scrollTop(),
//              offsetTop = this.$target.offset().top,
//              nodeHeight = this.$target.height(),
//              windowHeight = $(window).height();
//          if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){
//            return true;
//          }else{
//            return false;
//          }
//        };
//       function showImg($img){
//         var url = $img.attr('data-src');
//         $img.attr('src',url);
//       }
//       var lazy = (function(){
//         var isOne = true;
//         return {
//           init: function($target,callback){
//             $target.each(function(index,target){
//               new Exposure($(target),callback);
//             })
//           },
//           isOne: function($target,callback){
//             if(isOne){
//               $target.each(function(index,target){
//                 new Exposure($(target),callback);
//               })
//             }
//             isOne = false;
//           },
//         }
//       })();
//       lazy.isOne($('.ct #word'),function($node){
//         $node.text( $node.text() + "123122" )
//       });
//       lazy.isOne($('.ct #word2'),function($node){
//         $node.text( $node.text() + "hello" )
//       });
//       lazy.init( $('.ct img') ,function($node){
//         showImg($node)
//
//
//       return {
//
//       }
//
//
//     })()
//
//     return Exposure;
//
//
// })
//
//       }) ;
