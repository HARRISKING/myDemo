// requirejs.config({
//   base: "./src/js",
//   paths:{
//     'jquery': 'src/js/lib/bower/jquery/jquery.js',
//   }
//
// });
// //加载入口模块
// requirejs(['app/index']);

requirejs.config({
  base: "./src/js",
  paths: {
  	'jquery': 'lib/bower/jquery/jquery'
  }
  // ,
  // shim: {
  // 	's': {
  // 		exports: 'jQuery'
  // 	}
  // }
});

// 加载入口模块
require(['app/index'],function(){

});

//  ./src/js/lib/bower_components/jquery/dist/jquery.min
