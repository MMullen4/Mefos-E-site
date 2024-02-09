const apiKey = pk_live_51Oggj7Gh3q0yh3BLArzNjk7JPD89FOl4dGga0EsLt2z2lrABQSDcENORhAFGVYFE7oqZQDDbUMcZztNwlfMfsiJD00aTnMqwyA
const stripe = Stripe(apiKey);
const elements = stripe.elements();
const router = require('express').Router();
const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');
const checkoutRoutes = require('./checkout-routes');
const orderRoutes = require('./order-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);
router.use('/checkout', checkoutRoutes);
router.use('/orders', orderRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
