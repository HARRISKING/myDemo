// 第一次试验成功：
    var name = "harrisking";
    function sayName(){
      console.log(name);
    }
    function sayHello(){
      console.log('hello'+' '+name);
    }
    module.exports = {
      sayHello : sayHello,
      sayName : sayName
    }
// 第二次实验：
    var people = {
      name: 'harrisking',
      age:23,
      saysth: function(){
        console.log('hello,my name is '+this.name+',my age is '+this.age);
      }
    }

    module.exports = people;

// commonjs:

function fuckyou(name){
  console.log(name+'you are a big ass!');
}

module.exports = {
  fuckyou : fuckyou
}
