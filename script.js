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

  hours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex = 1, mainIndex = 1, time = '20:00', address) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 55',
  starterIndex: 1,
});

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

/*Destructuring Objects */

const { name, hours, categories } = restaurant;
console.log(name, hours, categories);

const { name: restaurantName, hours: openHours, categories: tags } = restaurant;
console.log(restaurantName, openHours, tags);

//Default values
const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let ab = 111;
let bc = 999;
const obj = { ab: 23, bc: 7, cd: 14 };
({ ab, bc } = obj);
console.log(ab, bc);

//Nested Objects
const {
  fri: { open: o, close: cl },
} = hours;
console.log(o, cl);
