// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found.index = i;
      found();   // execute callback and return index
    }
  }
}

function actionWhenFound() {
  console.log(`Found Waldo at ${actionWhenFound.index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);