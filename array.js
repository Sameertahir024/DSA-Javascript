// return true is the element is appear more than once

// let nums = [1, 2, 3, 2];

// // Output: true;

// // solution//
// function checkBublicate(nums) {
//    let seen = new Set();
//    for (let n of nums) {
//       if (seen.has(n)) return true;
//       seen.add(n);
//    }
//    return false;
// }

// console.log(checkBublicate(nums));

// let s = "racecar";
// let t = "carrace";

// // Output: true;
// // solution

// function checkAnagram(s, t) {
//    let one = s.split("").sort().join(" ");
//    let two = t.split("").sort().join(" ");
//    return one === two;
// }

// console.log(checkAnagram(s, t));
//
//
// let nums = [3, 4, 5, 6];
// let target = 7;

// // Output: [0,1]
// //
// function twoSun(nums, target) {
//    for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//          if (nums[i] + nums[j] === target) return [nums[i], nums[j]];
//       }
//    }

//    return " no target find";
// }

// console.log(twoSun(nums, target));
//
//
let strs = ["act", "pots", "tops", "cat", "stop", "hat"];

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
//

function makeGroupAnagram(strs) {
   let group = {};
   for (let s of strs) {
      const sort = s.split("").sort().join("");
      if (!group[sort]) {
         group[sort] = [];
      }
      group[sort].push(sort);
   }
   return Object.values(group);
}
console.log(makeGroupAnagram(strs));
