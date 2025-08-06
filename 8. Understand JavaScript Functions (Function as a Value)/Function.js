// Function Template

function name_of_the_function(/* Input something*/) {
  // Function body
  // any valid js code
  // return a result
}

/*
 * Name: Human_Lifecycle
 * Param: human_name
 * :human_name, awake from sleep
 * :human_name, go to washroom
 * :human_name, take breakfast
 * :human_name, go to school/college/office
 * :human_name, Return from office
 * :human_name, Take dinner
 * :human_name", Go to sleep
 */

// Call Human_Lifecycle for 'Abu Musa'
// Call Human_Lifecycle for 'Easin Islam'
// Call Human_Lifecycle for 'Saiful Islam'
// Call Human_Lifecycle for 'Akib Ahmed'
// Call Human_Lifecycle for 'Alamin Mir'

/*
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */
function sleep(name) {
  console.log(`${name} is sleeping`);
}

/*
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */
function awake(name) {
  console.log(`${name} is awake`);
}

/*
 * Function: Eat
 * Param: name
 * Param: Type
 * Definition: How to eat
 */
function eat(name, type) {
  console.log(`${name} is eating ${type}`);
}

/*
 * Function: Walk
 * Param: name
 * Param: Destination
 * Definition: How to walk
 */
function walk(name, destination) {
  console.log(`${name} is walking to ${destination}`);
}

/*
 * Function: Study
 * Param: name
 * Definition: How to study
 */
function study(name) {
  console.log(`${name} is studying`);
}

/*
 * Function: Work
 * Param: name
 * Definition: How to work
 */
function work(name) {
  console.log(`${name} is working`);
}

/*
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Walk -> name, 'office'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Walk -> name, 'home'
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function jobHolderLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  walk(name, "office");
  work(name);
  eat(name, "lunch");
  walk(name, "home");
  eat(name, "dinner");
  sleep(name);
}

/*
 * Function: Student Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Study -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function studentsLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  study(name);
  eat(name, "lunch");
  study(name);
  eat(name, "dinner");
  sleep(name);
}

// Students_Lifecycle -> 'Faruk'
// Students_Lifecycle -> 'Elias'
// Students_Lifecycle -> 'Faisal'
console.log("____________ Student Lifecycle ______________");
studentsLifecycle("Faruk");
console.log("__________________________");
studentsLifecycle("Elias");
console.log("__________________________");
studentsLifecycle("Faisal");

// Job_Holder_Lifecycle -> 'Musa'
// Job_Holder_Lifecycle -> 'Shakib'
// Job_Holder_Lifecycle -> 'Bipon'

console.log("____________ Job Holder Lifecycle ______________");
jobHolderLifecycle("Musa");
console.log("__________________________");
jobHolderLifecycle("Shakib");
console.log("__________________________");
jobHolderLifecycle("Bipon");

