// //Add Items to an Array with push() and unshift()
// function mixedNumbers(arr) {
//     // change code below this line
//     arr.unshift('I', 2, 'three');
//     arr.push(7, 'VIII', 9);
//     // change code above this line
//     return arr;
//   }
  
//   // do not change code below this line
//   console.log(mixedNumbers(['IV', 5, 'six']));

//   //Remove Items from an Array with pop() and shift()
//   function popShift(arr) {
//     let popped = arr.pop(); // change this line
//     let shifted = arr.shift(); // change this line
//     return [shifted, popped];
//   }
  
//   // do not change code below this line
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));

//   //Remove Items Using splice()
//   function sumOfTen(arr) {
//     // change code below this line
//     arr.splice(2,2);
//     // change code above this line
//     return arr.reduce((a, b) => a + b);
//   }
  
//   // do not change code below this line
//   console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

//   //Add Items Using splice()
//   function htmlColorNames(arr) {
//     // change code below this line
//     arr.splice(0, 2, ...['DarkSalmon', 'BlanchedAlmond']);
//     // change code above this line
//     return arr;
//   } 
   
//   // do not change code below this line
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

//   //Copy Array Items Using slice()
//   function forecast(arr) {
//     // change code below this line
//     let test = arr.slice(2,4);
//     console.log(test);
//     return arr;
//   }
  
//   // do not change code below this line
//   console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Copy an Array with the Spread Operator

// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];
// // thatArray equals [true, true, undefined, false, null]
// // thisArray remains unchanged, and is identical to thatArray

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // change code below this line
      
//       newArr.push(arr);
//       // change code above this line
//       num--;
//     }
//     return newArr;
//   }
  
//   // change code here to test different cases:
//   console.log(copyMachine([true, false, true], 2));

// //Combine Arrays with the Spread Operator
// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// // thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
// function spreadOut() {
// let fragment = ['to', 'code'];
// let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
// return sentence;
// }

// // do not change code below this line
// console.log(spreadOut());

// //Check For The Presence of an Element With indexOf()
// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

// fruits.indexOf('dates') // returns -1
// fruits.indexOf('oranges') // returns 2
// fruits.indexOf('pears') // returns 1, the first index at which the element exists

// function quickCheck(arr, elem) {
// // change code below this line
// return arr.indexOf(elem)>0;
// // change code above this line
// }

// // change code here to test different cases:
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// //Iterate Through All an Array's Items Using For Loops
// function filteredArray(arr, elem) {
//     let newArr = [];
//     // change code below this line
//     //newArr = arr.filter(arr=>arr.indexOf(elem)<0);

//     // newArr = arr.filter(function(arr){
//     //     if (arr.indexOf(elem)<0){
//     //         return true;
//     //     }
//     // });

//     for (let i=0; i<arr.length; i++) {
//       if (arr[i].indexOf(elem)<0) {
//         newArr.push(arr[i]);
//       }
//     }
//     // change code above this line
//     return newArr;
//   }
  
//   // change code here to test different cases:
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 4, 9]], 3));


//   let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function countOnline(obj) {
//     // change code below this line
//     let num = 0;
//     for (let user in obj) {
//       if (obj[user].online) {
//         num++;
//       }
//     }
//     return num;
//     // change code above this line
//   }
  
//   console.log(countOnline(users));

//   //Generate an Array of All Object Keys with Object.keys()
//   let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function getArrayOfUsers(obj) {
//     // change code below this line
//     return Object.keys(users);
//     // change code above this line
//   }
  
//   console.log(getArrayOfUsers(users));

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // change code below this line
    let friends =   userObj.data.friends;
    friends.push(friend);
    return friends;
    // change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));