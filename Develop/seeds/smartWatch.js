const { SmartWatch } = require('../models');

const smartWatchData = [
    {
        brand: 'Tapple',
        name: 'Tapple Watch',
        model: 'Watch',
        price: 100,
        stock: 5,
        image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        color: 'black, green, red, white, blue',
        category_id: 13,

    },
    {
        brand: 'Tapple',
        name: 'Tapple Watch Pro',
        price: 250,
        stock: 10,
        image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        color: 'black, green, red, white, blue',
        category_id: 14,
    },
    {
        brand: 'Tapple',
        name: 'Tapple Watch Gen 2',
        price: 350,
        stock: 15,
        image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        color: 'black, green, red, white, blue',
        category_id: 15,
    },
    {
        brand: 'Tapple',
        name: 'Tapple Watch Gen 3',
        price: 500,
        stock: 3,
        image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        color: 'black, green, red, white, blue',
        category_id: 16,
    },
];
const seedSmartWatch = () => SmartWatch.bulkCreate(smartWatchData);
module.exports = seedSmartWatch;