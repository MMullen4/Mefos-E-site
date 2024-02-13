const { Category } = require('../models');
const categoryData = [
    {
        image: "Develop/views/images/comp clip.jpeg",
        category_name: 'DeskTop Computers',
    },
    {
        image: "Develop/views/images/laptop clip.jpeg",
        category_name: 'Laptops',
    },
    {
        image: "Develop/views/images/smartph clip.jpeg",
        category_name: 'Smart Phones',
    },
    {
        image: "Develop/views/images/smwatch clip.jpeg",
        category_name: 'Smart Watches',
    }
];
const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;
