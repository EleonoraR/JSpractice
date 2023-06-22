'use strict';
/*old way */
const array1 = [1, 2, 3];
const a = array1[0];
const b = array1[2];
const c = array1[3];

/*new way Destructuring Arrays*/
/*Original Array is not affected after destracturing(unpacking it) */
const [e, r, d] = array1;
console.log(e, r, d);

/*Example 1 */
const array2 = [8, 9, 10];
const [f, g, h] = array2;
console.log(f, g, h);

/*Example 2 */
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

/*Destructuring */
[main, secondary] = [secondary, main];
console.log(main, secondary);

/*Receives 2 return values from a function */
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

/*Nested Destructuring */
const nestedArray = [2, 4, [5, 6]];
const [i, , j] = nestedArray;
console.log(i, j);

/*Destructuring inside of destructuring*/
const [i1, , [j1, k1]] = nestedArray;
console.log(i1, j1, k1);

/*Default values in destructuring */

const [p = 1, q = 1, v = 1] = [12];
console.log(p, q, v);
