     <script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.js"></script>
     <script type="text/javascript">

     
          check();
        $(window).on('scroll',check);
        //check本身就是函数，直接写即可，另外这里不能加括号(加上括号就变为值)

        function check(){
          $('.ct img').not('.load').each(function(){
            if(isShow($(this))){
              showImg($(this))
            }
          })
        }

        function showImg($imgs){
          $imgs.each(function(){
            var url = $(this).attr('data-src');
            $(this).attr('src',url);
            $(this).addClass('load');
          })
        };

        function isShow($node){
          var scrollTop = $(window).scrollTop(),
              offsetTop = $node.offset().top,
              nodeHeight = $node.height(),
              windowHeight = $(window).height();
        if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){
          return true;
        }else{
          return false;
        };
      };
     </script>
