const { Category } = require('../models');
const categoryData = [
    {
        category_name: 'DeskTop Computers',
    },
    {
        category_name: 'Laptops',
    },
    {
        category_name: 'Smart Phones',
    },
    {
        category_name: 'Smart Watches',
    }
];
const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;
