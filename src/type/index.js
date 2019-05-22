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

var dataType = {
    isString: isString,
    isArray: isArray
};

module.exports = dataType;
