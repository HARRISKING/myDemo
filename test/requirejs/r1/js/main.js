    requirejs.config({
      baseURL:'./js',
      paths:{
        jquery: './lib/jquery-3.2.1.min'
      }
    })

    requirejs(['./app/app'])
    
