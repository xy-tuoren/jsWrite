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