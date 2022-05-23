let counter = 0;

const timer = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter === 10) {
    clearInterval(timer);
  }
}, 1000);
