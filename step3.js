const https = require("http");
const timeoutScheduled = Date.now();

const loop = () => {
  https.get("http://localhost:8080", (resp) => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`[Loop] ${delay}ms have passed since I was scheduled`);
    loop();
  });
};

loop();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`[setTimeout] ${delay}ms have passed since I was scheduled`);
}, 3000);
