
module.exports.isFunction = function (func) {

    if(func && typeof func === 'function')
        return true;

    return false;
};