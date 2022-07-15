//数组扁平化
let arr = [[22,[1,2,[5,8],[9,2]],[2,7,1,[9,0,[1,6]]]],[2]]

//1
function flatten(arr,dep){
   return dep > 1 ? arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur) ? flatten(cur,dep-1) : cur),[]) : Array.prototype.slice.call(arr) 
}

// console.log(flatten(deepCopy(arr),Infinity));

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

console.log(_flatten(arr,Infinity));

//3
function __flatten(arr,dep=0){
    if(!Array.isArray(arr)){
        return arr
    }
    arr.forEach((item) => {
        if(Array.isArray(item)){

        }
    });
}

//4 number only
function flatten(input){
    return input.toString().split(',').map(item => +item);
}

//深拷贝
function deepCopy(obj,dep=0){
    if(typeof obj !== 'object' || dep < 1){
        return typeof obj === 'object' ? Object.assign({},obj) : obj
    }
    let clone = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            if(obj[key] && (typeof obj[key] === 'object')) {
                clone[key] = deepCopy(obj[key],dep-1)
            }else {
                clone[key] = obj[key]
            }
        }
    }
    return clone
}



