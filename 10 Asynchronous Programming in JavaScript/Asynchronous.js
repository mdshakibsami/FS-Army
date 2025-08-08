/**
 * In JavaScript, asynchronous tasks are operations that:
 *      - Start now but finish later.
 *      - Do not block the rest of the code from running.
 *      - Allow JS to keep working on other tasks while waiting for them to complete.
 */

/**
 * Key Points:
 *      - JavaScript is single-threaded, but asynchronous behavior is achieved via the event loop and callback queue.
 *      - Async tasks are handled by the browser APIs or Node.js APIs (like setTimeout, fetch, fs.readFile).
 *      - When the task is done, the callback is placed in the task queue, waiting for the call stack to be free.
 */

// console.log("Example 1 :");
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// setTimeout(() => {
//   console.log(4);
//   console.log("__________________________________________________");
// }, 0);
// console.log(5);

/**
 * How it works:
 *      - console.log("Example 1 :") → runs immediately.
 *      - console.log(1) → runs immediately.
 *      - setTimeout(..., 0) → schedules the callback to run after the current call stack is empty, not instantly.
 *      - Same for the next two setTimeout calls — they go to the callback queue.
 *      - console.log(5) → runs immediately.
 *      - After all synchronous code finishes, the event loop pushes the setTimeout callbacks to the stack in order:
 *          - Prints 2
 *          - Prints 3
 *          - Prints 4
 */

console.log("Example 2 : ");
function main() {
  setTimeout(() => {
    console.log("last");
  }, 2000);

  middle();
  setTimeout(() => {
    console.log("Fist");
  }, 1000);
}

function middle() {
  console.log("I am in the middle");
}

main();

/**
 * Step-by-step Execution:
 *      - console.log("Example 2 : ") → runs immediately.
 *      - main() is called.
 *      - Inside main():
 *      - First setTimeout(..., 2000) schedules "last" to print after ~2 seconds.
 *      - middle() is called → prints "I am in the middle".
 *      - Second setTimeout(..., 1000) schedules "Fist" to print after ~1 second.
 *      - Event loop handles timers in order of their scheduled completion:
 *              - After 1 second → "Fist" logs.
 *              - After 2 seconds → "last" logs.
 */

/**
 * Note :
 *      - First, all the synchronous tasks are executed.
 *      - Any asynchronous tasks are sent to their respective queues (e.g., callback queue, microtask queue).
 *      - After the synchronous code finishes and the call stack becomes empty, the event loop takes asynchronous tasks from the queue and pushes them to the call stack one by one for execution.
 */
