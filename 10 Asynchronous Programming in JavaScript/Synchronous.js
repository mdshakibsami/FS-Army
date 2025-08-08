/**
 * In JavaScript, synchronous tasks are operations that are executed one after another, in the exact order they appear in the code.
 * The JavaScript engine will not move to the next line until the current one is fully completed.
 */

/**
 * Key Points:
 *      - Single-threaded: JavaScript runs code in one main thread.
 *      - Blocking: A synchronous task will block further execution until it's done.
 *      - Execution order: Tasks run top-to-bottom, sequentially.
 *      - Part of the call stack: Each task is added to the call stack and completed before the next one starts.
 */

console.log("Example 1:")
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
console.log("------------------------------");


console.log("Example 2:")
function longTask() {
  for (let i = 0; i < 1e9; i++) {} // heavy loop
  console.log("Long task done");
}

console.log("Start");
longTask();
console.log("End");



