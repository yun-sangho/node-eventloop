const https = require('http');
const timeoutScheduled = Date.now()

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`[setTimeout] ${delay}ms have passed since I was scheduled`);
}, 2000);

https.get('http://localhost:8080', (resp) => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`[Http] ${delay}ms have passed since I was scheduled`);
})

setImmediate(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`[setImmediate] ${delay}ms have passed since I was scheduled`);
});
