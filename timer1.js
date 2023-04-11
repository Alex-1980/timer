// set the arlam after specified amount of time has passed
const numArr = process.argv.slice(2);

const timer = function (numArr) {
  for (const num of numArr) {
    const delay = Number(num);
    // ignore/skip a non-number
    if (isNaN(delay) || typeof delay !== "number") {
      continue;
    }
    // ignore/skip any numbers that are negative
    if (delay < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('.');
    }, delay * 1000);
  }
};

timer(numArr);

