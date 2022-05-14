'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment_content: {
        type: Sequelize.STRING
      },
      user_id:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      post_id:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      polarity:{
        type:Sequelize.FLOAT,
        allowNull:false
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
    await queryInterface.dropTable('post_comments');
  }
};