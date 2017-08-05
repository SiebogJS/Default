'use strict';


module.exports = function (type, msg) {
    return new Message(type, msg);
};

function Message(type, msg) {
    this.type = type;
    this.content = msg;
}