const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class cart extends Model { }

cart.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            },
            product_name: {
                type: Datatypes.STRING,
                allowNull: false
            },
            price: {
                type: Datatypes.DECIMAL,
                allowNull: false,
                validate: {
                    isDecimal: true
                },
            },
            subtotal: {
                type: Datatypes.DECIMAL,
                allowNull: false,
                validate: {
                    isDecimal: true
                },
                
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart'
    });
    
module.exports = cart;
    
