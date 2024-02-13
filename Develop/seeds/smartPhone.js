const { SmartPhone } = require('../models');

const smartPhone = [
    {
    name: 'Samsing Milky S10',
    price: 1000,
    stock: 10,
    image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        color: 'black, green, red, white, blue',
        category_id: 9,
    },
    {
    name: 'UPhone X',
    price: 2000,
    stock: 5,
    image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        color: 'black, green, red, white, blue',
        category_id: 10,
    },
    {
    name: 'TwoPlus 6',
    price: 1500,
    stock: 8,
    image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        color: 'black, green, red, white, blue',
        category_id: 11,
    },
    {
    name: 'Samsing Milky S9',
    price: 900,
    stock: 15,
    image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        color: 'black, green, red, white, blue',
        category_id: 12,
    },
];
const seedSmartPhones = () => SmartPhone.bulkCreate(smartPhone);
module.exports = seedSmartPhones;