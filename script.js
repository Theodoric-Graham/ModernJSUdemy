/*
//Importing Module
//preferred style one default export per module, but its not a rigid rule
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// ('./shoppingCart.js');
// addToCart('bread', 5);
// console.log(tq, price);

console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//avoid this to reduce complexity, dont mixed named and default exports in the same module
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { shippingCost } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);
add(4);
add(4);
add(9);

console.log(shippingCost);

// console.log('start fetching');

//top level await ES2022, blocking
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(getLastPost());

//not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

//the main goal of the module pattern is to encapsulate functionality to have
//private data and to expose a public api

//the best way of this is using a function, they give us private data by default
//and allow us to return values, which can become our public api

//IIFE we dont have to call it seperately and we can insure its only called once
// to create a new scope and return data just once
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} was added to the cart(shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

//closures allow a function to have access to all the variables that were
//present at its birthplace
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

//Export in node js
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} was added to the cart(shipping cost is ${shippingCost})`
  );
};

//Import in node js

const { addToCart} = require('./shoppingCart.js')