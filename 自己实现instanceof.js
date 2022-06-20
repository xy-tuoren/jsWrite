function _instanceof(left,right){
    let leftProto = left.__proto__;
    let rightPrototype = right.prototype;
    while(leftProto){
        if(leftProto === rightPrototype){
            return true;
        }
        leftProto = leftProto.__proto__ //Object.getPrototypeOf(leftProto);
    }
    return false;
}
let arr = []
let b = {}
console.log(_instanceof(arr,Function));
console.log(_instanceof(b,Object));