function hasTargetSum(array, target) {
  // Write your algorithm here\
  for(i = 0; i < array.length - 1; i++){
    for (j = i + 1; j < array.length; j++){
      if (target == array[j] + array[i]){
        return true

        
      }
      
      
    }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here\
  form a while loop
  have while loop , loop through array and add 2num
  make an if statement to see if sum of 2num = targert number
*/

/*
  Add written explanation of your solution here
    this 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
