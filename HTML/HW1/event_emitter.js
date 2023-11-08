const {EventEmitter} = require('events');
class CustomEventEmitter extends EventEmitter {}
const customEmitter = new CustomEventEmitter();
module.exports = customEmitter;