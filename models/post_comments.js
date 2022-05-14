'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  post_comments.init({
    comment_content: {
      type:DataTypes.STRING,
      allowNull:false
    },
    user_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    post_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    polarity:{
      type:DataTypes.FLOAT,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'post_comments',
  });
  return post_comments;
};