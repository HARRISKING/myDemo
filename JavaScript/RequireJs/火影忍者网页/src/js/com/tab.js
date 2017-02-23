//
//   function Tab(ct){
//     this.ct = ct;
//     this.init();
//     this.bind();
// };
//
// Tab.prototype.init = function(){
//   this.tabLists = this.ct.querySelectorAll('.navBox .nav');
//   this.tabPanels = this.ct.querySelectorAll('.content .cot');
// };
//   Tab.prototype.bind = function(){
//     var _this = this;
//     this.tabLists.forEach(function(tabList){
//       tabList.onclick = function(e){
//         var target = e.target;
//         idx =[].indexOf.call(_this.tabLists,target);
//
//         _this.tabLists.forEach(function(li){
//           li.classList.remove('active');
//         })
//         target.classList.add('active');  //classList是一个只读属性，返回一个元素的类属性的实时集合。
//
//     _this.tabPanels.forEach(function(panel){
//         panel.classList.remove('active');
//     })
//         _this.tabPanels[idx].classList.add('active');
//       };
//     });
//   }
//
//
//
//
//
//
//
//
//
//
//   var tab1 = new Tab(document.querySelectorAll('#ct')[0]);
//   var tab2 = new Tab(document.querySelectorAll('#ct')[1]);
//   var tab2 = new Tab(document.querySelectorAll('#ct')[2]);
//
//
//
//
//
//
//   // $('.nav').on('click',function(){
//   //   var idx = $(this).index();
//   //   $(this).siblings().removeClass('active');
//   //   $(this).addClass('active');
//   //
//   //   $(this).parents('#ct').find('.content >li').removeClass('active');
//   //   $(this).parents('#ct').find('.content >li').eq(idx).addClass('active');
