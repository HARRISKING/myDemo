    requirejs.config({
      baseURL: 'www/.js',
      paths:{
        app: '../app'
      }
    })

    // requirejs(['jquery','canvas','sub'],function($,canvas,sub){
    //
    // })
    requirejs(['app/sub'])
