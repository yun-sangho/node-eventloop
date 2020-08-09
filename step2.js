const https = require("http");
const timeoutScheduled = Date.now();

https.get("http://localhost:8080", (resp) => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`[Http] ${delay}ms have passed since I was scheduled`);

  setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`[setTimeout] ${delay}ms have passed since I was scheduled`);
  }, 0);

  setImmediate(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`[setImmediate] ${delay}ms have passed since I was scheduled`);
  });
});
