//Part One
let counter = 0;

function incrementCounter() {
  counter++;
  incrementCounter();
}

try {
  incrementCounter();
} catch (error) {
  console.log(error, counter);
}

//Part Two

const myArr = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]]];

function flatten(index, arr, newArr) {
  if (index >= arr.length) return newArr;

  if (Array.isArray(arr[index])) {
    flatten(0, arr[index], newArr);
  } else {
    newArr.push(arr[index]);
  }

  return flatten(index + 1, arr, newArr);
}

const flattenedArray = flatten(0, myArr, []);
console.log(flattenedArray);
const trampoline = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
};

// Part 3

const olEl = document.getElementById("result");
console.log(olEl);

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function primeNumbers(start, n) {
  if (start > n) return;
  if (isPrime(start)) {
    const liEl = document.createElement("li");
    liEl.textContent = start;
    olEl.append(liEl);
  }
  return () => primeNumbers(start + 1, n);
}

trampoline(primeNumbers, 2, 10000);
setTimeout(() => {
  alert("Calculation complete");
}, 0);