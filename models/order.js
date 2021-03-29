'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsToMany(models.Product, {
        through: 'ProductOrders',
        as: 'products',
        foreignKey: 'orderId',
       
      });
    }
    
  };
  Order.init({
    amount: DataTypes.STRING,
    location: DataTypes.STRING,
    userId: {
      type:DataTypes.INTEGER,
      references :{
        model:'Users',
        key:'id'
      },
      onDelete:"SET NULL",
      onUpdate:"CASCADE"
  }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};