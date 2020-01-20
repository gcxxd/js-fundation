//工厂模式
/* 工厂模式解决了创建多个相似对象的问题，但是没有解决对象识别的问题 */
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    alert(this.name);
  };
  return o;
}

var person1 = createPerson('zgc', 18, 'pr');
var person2 = createPerson('llq', 20, 'mr');

//构造函数模式

/* 与工厂模式的区别
   1.没有显示的创建对象
   2.直接将属性和方法赋予this对象
   3.没有return语句
   实例化的执行步骤
   1.创建一个新对象
   2.将构造函数的作用域赋给新对象(是this指向该对象)
   3.执行构造函数中的代码,为这个对象添加属性。
   4.返回新对象。
*/

function Person(name, age, obj) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    return this.name;
  }
}

var person1 = new Person('zgc', 29, 'nn');
var person2 = new Person('llq', 28, 'asd')
console.log(person1.constructor == Person, 'true');
