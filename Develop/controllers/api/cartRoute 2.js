const express = require('express');
const app = express();

// Import the cart function from the cart.js file
app.get('/cart', async (req, res) => {
    const cartItems = await cart();
    // send cart back to client
    res.send(cartItems);
});
