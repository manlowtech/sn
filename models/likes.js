'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  likes.init({
    like_count: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    post_id:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    comment_id:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    like_type:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"post" // posts,comment,hooks
    }
  }, {
    sequelize,
    modelName: 'likes',
  });
  return likes;
};