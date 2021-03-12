/**
INPUT is array of numbers, Distinct INTS
 * @param {number[]} nums
 
OUTPUT is an array of arrays of all possible combos
 * @return {number[][]}
 */

const helper = (options, currentPerm, allPerms) => {
  // if no more options
  if(!options.length) {
  // add currentPerm to allPerms
    allPerms.push(currentPerm);
  } else {
    for(let i = 0; i < options.length; i++) {
      // create newOptions array as a copy of options with current index removed
      const newOptions = options.slice(0, i).concat(options.slice(i + 1));
      // add options[i] to currentPerm
      const newPerm = currentPerm.slice();
      newPerm.push(options[i]);
      // call helper with newOptions, currentPerm, allPerms
      helper(newOptions, newPerm, allPerms);
    }

  }
};

const permute = (nums) => {
    // init allPerms = []
  const allPerms = [];
    // call helper with nums, [], allPerms
  helper(nums, [], allPerms);
  return allPerms;
};