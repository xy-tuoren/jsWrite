//数组扁平化
let arr = [[22,[1,2,[5,8],[9,2]],[2,7,1,[9,0,[1,6]]]],[2]]

//1
function flatten(arr,dep){
   return dep > 1 ? arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur) ? flatten(cur,dep-1) : cur),[]) : Array.prototype.slice.call(arr) 
}

//2
function _flatten(arr,dep=0){
    if(dep < 1){
        return arr.slice()
    }
    while(dep && arr.some((item)=>Array.isArray(item))){
        arr = [].concat(...arr)
        dep--
    }
    return arr
} 

//3
function __flatten(arr,dep=0){
    if(dep < 1){
        return Array.prototype.slice.call(arr)
    }
    let result = [];
    arr.forEach(element => Array.isArray(element) ? result.push.apply(result,__flatten(element,dep-1)) : result.push(element))
    return result
}

//4 number only
function ___flatten(arr){
    return arr.toString().split(',').map(item => +item);
}

//5
function ____flatten(arr,dep=0){
    let stack = [...arr]
    let result = []
    while(stack.length){
        let data = stack.pop();
        if(Array.isArray(data)){
            stack.push(...data)
        }else {
            result.push(data)
        }
    }
    return result.reverse()
}

//6
function flat(arr,dep=0){
    return arr.flat(dep)
}


