//call
Function.prototype.myCall = function(context){
    if(typeof context !== 'function'){
        console.error('type error!');
    }
    //获取参数
    let args = Array.from(arguments).slice(1);
    let result = null;
    context = context || window || globalThis;
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}

//apply
Function.prototype.myApply = function(context){
    if(typeof context !== 'function'){
        throw new TypeError('type not function');
    }
    let result = null;
    context = context || window;
    context.fn = this;
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else {
        result = context.fn();
    }
    delete context.fn();
    return result;
}

//bind
Function.prototype.myBind = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Error");
    }
    // 获取参数
    var args = [...arguments].slice(1),
      fn = this;
    return function Fn() {
      // 根据调用方式，传入不同绑定值
      return fn.apply(
        //判断构造函数情况
        this instanceof Fn ? this : context,
        args.concat(...arguments)
      );
    };
  };

