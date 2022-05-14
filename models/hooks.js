'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hooks.init({
    hook_type:{
      type:DataTypes.STRING, //post,comment
      allowNull:false
    },
    hook_content:{
      type:DataTypes.STRING,
      allowNull:true
    },
    post_id:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    comment_id:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    hook_media:{
      type:DataTypes.STRING,
      allowNull:true
    },
    hooked_user_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },

    polarity: {
      type:DataTypes.FLOAT,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'hooks',
  });
  return hooks;
};