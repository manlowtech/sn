'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ads_manager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ads_manager.init({
    ad_content: DataTypes.STRING,
    
    polarity:{
      type:DataTypes.FLOAT,
      allowNull:false
    },
    user_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    media_url:{
      type:DataTypes.STRING,
      allowNull:true
    },
    state:{
      type:DataTypes.DATE,
      //tobe edited with default current date, for when to activate posta
    }, 
  }, {
    sequelize,
    modelName: 'ads_manager',
  });
  return ads_manager;
};