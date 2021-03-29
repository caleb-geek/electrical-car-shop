'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Order, {
        through: 'ProductOrders',
        as: 'orders',
        foreignKey: 'productId',
       
      });
    }    
    
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    tag: DataTypes.STRING,
    details: DataTypes.TEXT,
    image: DataTypes.STRING,
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};