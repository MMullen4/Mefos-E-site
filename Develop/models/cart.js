const { Product, Datatypes } = require('sequelize');
const { sequelize } = require('../config/db');
import { DataTypes } from 'sequelize';

class cart extends Model{ }

cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
    })