# JS基础

## 执行环境及作用域

+ 全局执行环境，全局执行环境依赖于ECMAScript 实现所在的宿主环境,在web浏览器中window对象被认为是全局执行环境，所有的全局变量和函数都是作为window对象的属性和方法创建。，在NodeJS的全局执行环境是global对象。
+ 当代码在一个环境中执行时，会创建变量的一个作用域链（保证对执行环境访问的所有变量和函数的有序访问）。内部环境可以通过作用域链访问所有的外部环境,但
 外部环境不能访问内部环境中的任何变量和函数。
+ 执行环境的类型只有两种————全局和局部（函数）。
+ 作用域链延长的两种方式：　try catch 和　with
+ 使用 var 声明的变量会自动被添加到最接近的环境中。初始化时没有用var声明的话该变量会自动加入全局变量。
+ 作用域链的用途是保证对执行环境有权访问的所有变量和函数的有序访问。

### 对于作用域/作用域链的理解
> JS中有执行环境，执行环境有与之相关的一个变量对象，执行环境中的变量和函数都保存在这个对象中。一个执行环境的所有代码运行完后就会被销毁，保存在其中的变量和函数定义也会被销毁。
> 每个函数都拥有一个自己的执行环境。当执行流进入一个函数时，这个函数的执行环境就被推入到执行堆栈里面，当函数执行完之后，执行堆栈会把栈顶的执行环境弹出，把控制权交回上一个执行环境。（控制权总是在执行环境堆栈最顶层）,当代码在环境中执行时，会创建变量对象的一个作用域链。作用域链的前端始终都是当前执行所在环境的变量对象。作用域链中的下一个变量来自下一个包含环境（外部环境）。标识符解析是沿着作用域链一级一级地搜索标识符的过程。搜索过程始终从作用域链的前端开始,然后逐级地向后回溯,直至找到标识符为止(如果找不到标识符,通常会导致错误发生)。

## 引用类型
### 数组
+ 数组检测 instanceOf  Array.isArray()
+ 数组排序  reverse()  sort(function(a,b){})  a-b的返回值大于0 降序 返回值小于0升序

### 函数
+ 函数声明
  + 函数声明语法   function sum() {}  解析器会在任何代码之前率先读取函数声明，使其在执行任何代码之前可用。
  + 函数表达式语法  var sum = function() {}  必须等到解析器执行到它所在的代码行,才会真正被解释执行。
  + Function构造函数  var sum = new Fuction(..., 参数, '函数体')  不推荐
+ 函数内部属性(arguments, this)
  + arguments包含传入函数的所有参数,包含一个callee属性，callee是一个指针,指向拥有arguments对象的函数。caller，该属性保存着调用当前函数的引用。
  + this, this引用的是函数据以执行的环境对象——或者也可以说是 this 值(当在网页的全局作用域中调用函数时,this 对象引用的就是 window )。
+ 函数的属性和方法
  +　每个函数都包括两个属性,length表示函数希望接收的命名参数的个数，protoype
  +  apply()接受两个参数,一个是在其中运行函数的作用域，另一个是参数数组。
  +  call()接受的第一个参数是运行在其中的作用域，其余的是要传入的参数列表。
  +  apply(), call()强大之处在于扩充函数赖以运行的作用域。
  +  ES5定义了方法  bind(),创建一个函数的实例,其 this 值会被绑定到传给 bind() 函数的值。

##面向对象的程序设计
> 一个对象可以定义数据属性和访问器属性
+ 属性类型
  + 数据属性有 4 个描述其行为的特性。
    + configurable 能否通过 delete 删除属性从而重新定义属性,能否修改属性的特性,或者能否把属性修改为访问器属性。default: true;
    + enumerable表示能否通过 for-in 循环返回属性。default: true;
    + writable 表示能否修改属性的值。 default: true;
    + value 包含这个属性的数据值。 default: undefined;
    + 一旦把属性定义为不可配置的,就不能再把它变回可配置了。除了Object.defineProperty() 方法修改除 writable 之外的特性,都会导致错误
　+ 访问器属性
    + 访问器属性不包含数据值，它们包含一对getter,setter函数。
    + 读取访问器属性时会调用 getter 函数,这个函数负责返回有效的值。
    + 在写入访问器属性时,会调用setter 函数并传入新值,这个函数负责决定如何处理数据。
    + 访问器有４个属性, configurable default:true, enumerable default: true, get(在读取属性时调用的函数) default: undefined,set(在写入属性时调用的函数) default: undefined
    + 不一定非要同时指定 getter 和 setter。只指定 getter 意味着属性是不能写,尝试写入属性会被忽略
  + 访问器属性和数据属性都不能直接定义，必须使用使用 Object.defineProperty() 来定义
  + 读取属性的特性
    + Object.getOwnPropertyDescriptor(属性所在的对象, 读取其描述符的属性名称)
+ 创建对象
    ```
    //工厂模式
    /* 
    优点: 工厂模式解决了创建多个相似对象的问题，但是没有解决对象识别的问题
    缺点: 工厂模式抽象了创建对象的具体过程 
    */
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
    /* 
      优点：创建自定义的构造函数对象，可以将它的实例标识为一种特殊的类型
      缺点：每个方法都要在每个实例上重新创建一遍
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

    ```
## 原型
> 创建的每个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个可以有特定类型的所有实例所共享的属性和方法即函数的原型对象。
> 默认的prototype(原型对象)在创建后会有一个constructor
> 创建的每个对象都有一个_proto_属性,这个属性是一个指针，指向这个对象的创建函数的原型对象





