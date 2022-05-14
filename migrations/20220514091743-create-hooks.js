'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hook_type:{
        type:Sequelize.STRING, //post,comment
        allowNull:false
      },
      hook_content:{
        type:Sequelize.STRING,
        allowNull:true
      },
      post_id:{
        type:Sequelize.INTEGER,
        allowNull:true
      },
      comment_id:{
        type:Sequelize.INTEGER,
        allowNull:true
      },
      hook_media:{
        type:Sequelize.STRING,
        allowNull:true
      },
      hooked_user_id:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      polarity: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hooks');
  }
};