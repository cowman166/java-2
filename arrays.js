'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log("${items[i]} ${i}");
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = [];
  for (const i in items.length){
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0, n).reverse();

  console.log(sortedNItems);
}
