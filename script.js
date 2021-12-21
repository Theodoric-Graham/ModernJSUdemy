//Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// ('./shoppingCart.js');
// addToCart('bread', 5);
// console.log(tq, price);

console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//avoid this to reduce complexity
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
