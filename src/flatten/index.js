var dataType = require('../type/index.js');

function flatten(arr) {
    
    // if (dataType.isArray(arr)) {
    //     flatten(arr)
    // }
    return dataType(arr)
}

console.log(flatten([1,2,3]))
