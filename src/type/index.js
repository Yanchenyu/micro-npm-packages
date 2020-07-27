var arrayTag = '[object Array]',
    stringTag = '[object String]';

function istype(obj, tag) {
    return Object.prototype.toString.call(obj) === tag
}

function isString(obj) {
    return istype(obj, stringTag)
}

function isArray(obj) {
    return istype(obj, arrayTag)
}

function isObject(obj) {
    var type = typeof obj;
    return obj != null && (type == 'object' || type == 'function');
}

function isObjectLike(obj) {
    return obj != null && typeof obj == 'object'
}

var dataType = {
    isString: isString,
    isArray: isArray,
    isObjectLike: isObjectLike,
    isObject: isObject
};

module.exports = dataType;


async function waitTime() {
    await new Promise(r => setTimeout(r, 1000));
    console.log('time in!!');
}

console.log('time start');
waitTime()
console.log('time end');
