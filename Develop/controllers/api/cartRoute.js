const express = require('express');
// const app = express();
// const { user } = require('../models');
const router = express.Router();
const { cart } = require('../models');

router.post('/', async (req, res) => {
    try {
        const cartItems = await cart();
        req.session.cart = {
            product_id: cartItems.product_id,
            quantity: cartItems.quantity,
            user_id: cartItems.user_id,
        }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });


