// This is your test secret API key.
const stripe = require('stripe')('sk_test_51Oggj7Gh3q0yh3BLowB8cJAqHl3lJWFx5DiwR56OZUwZTe3m0zdvsQD25Fpq1K50KaP0y4eghb9EVttCyVnjDSqm00UuZEv0K3');
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const homeRoute = require('./Develop/controllers/api/homeRoute');


// Set up handlebars engine with main as the default layout
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'Develop/views'));
app.use('/', homeRoute);

app.use(express.static(path.join(__dirname, 'Develop/public')));


const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));