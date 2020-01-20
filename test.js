function testAttr() {
  var student = {
    name: 'zgc',
    age: 22
  };
  var descriptor = Object.create(null);
  descriptor = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'llq'
  }
  Object.defineProperty(student, 'name', descriptor);
  Object.defineProperties(student, {
    'name': {
      value: 'guangci',
      writable: true
    },
    'age':　{
      configurable: true,
      enumerable: true
    }
  })
  var worker = {
    _name: 'zgc',
    age: 12
  };
  console.log(worker)
  Object.defineProperty(worker, 'name', {
    get: function() {
      return this._name + 'asd';
    },
    set: function(newVal) {
      this._name += newVal + 'zgc' + 'set'
    }
  })
  worker.name = '123';  
  var desc = Object.getOwnPropertyDescriptor(worker, '_name');
  console.log(desc);
}
testAttr();
