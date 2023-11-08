const customEmitter = require('./event_emitter');
let userCounter = 1;
customEmitter.on('userLoggedIn', () => {
  const user = `USER_${userCounter++}`;
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: ${user} logged in`);
});
setInterval(() => {
  customEmitter.emit('userLoggedIn');
}, Math.random() * 1900 + 100);