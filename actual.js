let intervalCount = 0;
const intervalId = setInterval(() => {
  console.log("interval");
  if (intervalCount++ > 4) {
    clearInterval(intervalId);
  }
}, 0);

setTimeout(() => console.log("timeout"), 0);
