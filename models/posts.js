'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Posts.init({
    post_content:{
      type: DataTypes.STRING,
      allowNull:true
    },
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
    }, /*
    post_type:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"regular",//regularpost,advertpost etc [regular,ad]
    } */
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};