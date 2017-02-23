
    define(function(require, exports){



      var $ = require('jquery');


      var Carousel = (function(){

        function _Carousel($ct){
          this.$ct = $ct;
          this.init();
          this.bind();
        };
        _Carousel.prototype.init = function(){
          var $btnPre = this.$btnPre = this.$ct.find('.advance'),
              $btnNext =this.$btnNext = this.$ct.find('.retreat'),
              $bulletCt =this.$bulletCt = this.$ct.find('.bullet-ct'),
              $bullet =this.$bullet = this.$ct.find('.bullet'),
              $box =this.$box = this.$ct.find('.box');

          this.isClick = false;  //加锁

          this.dataIndex = 0; //第几张图片
          this.pageLength=$box.children().length;  //没有克隆之前的图片数量

          this.$firstImg = $box.find('img').first(),
          this.$lastImg = $box.find('img').last();

          $box.prepend(this.$lastImg.clone())
          $box.append(this.$firstImg.clone())
          $box.width(this.$firstImg.width() * $box.children().length)//每次增加图片不必更改css
          $box.css('left','-300px') //让图片原始位置为第一张图片
        };


        _Carousel.prototype.bind = function(){
          var _this = this

          this.$btnNext.on('click',function(){
            _this.playNext(1);
          });

          this.$btnPre.on('click',function(){
            _this.playPre(1);
          });

          this.$bullet.find('li').on('click',function(){
            var idx = $(this).index();
            if(_this.dataIndex<idx){
              _this.playNext(idx-_this.dataIndex);
            }else{
              _this.playPre(_this.dataIndex-idx)
            }
          });
        };

        _Carousel.prototype.playNext = function(n){
          var _this = this;
          if(this.isClick) return;
          this.isClick = true;
          this.$box.animate({
            left: '-='+this.$firstImg.width()*n,
          },function(){
            _this.dataIndex+=n;
            console.log(_this.dataIndex)

            if(_this.dataIndex === _this.pageLength){
              _this.$box.css({'left':'-300px'});
              _this.dataIndex = 0;
            }
            _this.isClick = false;
            _this.setBullet();
          })
        };

        _Carousel.prototype.playPre = function(n){
          var _this = this;
          if(this.isClick) return;
          this.isClick = true;

          this.$box.animate({
            left:'+='+this.$firstImg.width()*n,
          },function(){
            _this.dataIndex-=n;
            console.log(_this.dataIndex)
            if(_this.dataIndex < 0){
              _this.$box.css('left', 0-(_this.pageLength * _this.$firstImg.width()));
              _this.dataIndex = _this.pageLength-1;
            }
            _this.isClick = false;
            _this.setBullet();
          })
        };

        _Carousel.prototype.setBullet = function(){
          this.$bullet.children().removeClass('active').eq(this.dataIndex).addClass('active');
        }

        return {
          init: function($ct){
            $ct.each(function(index,node){
              new _Carousel($(node));

            })
          }
        }

      })();
      return Carousel;//立即执行函数，暴露一个接口，其余的都不可见，更具有隐私性

      // return carousel;
    })
