'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loggen_in_devices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  loggen_in_devices.init({
    dev_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    location_cood:{
      type:DataTypes.STRING,
      allowNull:false
    },
    location_name:{
      type:DataTypes.STRING,
      allowNull:true
    },
    user_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'loggen_in_devices',
  });
  return loggen_in_devices;
};