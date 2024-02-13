const router = require('express').Router();
const {  ProductTag, Category, Product } = require("../../models");

router.post('/', async (req, res) => {
    try{
        const productTag = await ProductTag.findAll({
            include: [{
                model: Category,
                model: Product,
            }]

        });
        res.json(productTag)
    } catch (err) {
        res.status(500).json(err);
    }
});

model.exports = router;