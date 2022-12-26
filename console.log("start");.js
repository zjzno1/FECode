console.log("start");

setTimeout(() => {
  console.log("setTimeout1");
}, 0);

(async function foo() {
  console.log("async1");

  await asyncFunction();

  console.log("async2");

})().then(console.log("foo.then"));

async function asyncFunction() {
  console.log("asyncFunction");

  setTimeout(() => {
    console.log("setTimeout2");
  }, 0);

  new Promise((res) => {
    console.log("promise1");

    res("promise2");
  }).then(console.log);
}
console.log("end");

// 宏 setTimeout1 setTimeout2 
// 微 promise2 async2

// start async1 asyncFunction promise1 foo.then end