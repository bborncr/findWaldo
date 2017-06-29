// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found.index = index;
      found();   // execute callback and return index
    }
  });
}

function actionWhenFound() {
  console.log(`Found Waldo at ${actionWhenFound.index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);