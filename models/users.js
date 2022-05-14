'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    username: { 
      type:DataTypes.STRING,
      allowNull:false
    },
    flag: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false //0===>legal,1===>malicious
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    role:{
      type:DataTypes.STRING,
      defaultValue:"parent"
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};