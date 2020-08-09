const https = require("http");
const timeoutScheduled = Date.now();
const MAX_LOOP = 1;

const loop = (i) => {
  process.nextTick(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`[Loop] ${delay}ms have passed since I was scheduled`);

    if (i < MAX_LOOP) {
      loop(i + 1);
    }
  });
};

https.get("http://localhost:8080", (resp) => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`[Http] ${delay}ms have passed since I was scheduled`);

  process.nextTick(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`[Tick] ${delay}ms have passed since I was scheduled`);
    loop(1);
  });

  setImmediate(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`[setImmediate] ${delay}ms have passed since I was scheduled`);
  });
});
