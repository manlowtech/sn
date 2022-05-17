'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      like_count: {
        type: Sequelize.INTEGER
      },
      post_id:{
        type:Sequelize.INTEGER,
        allowNull:true
      },
      comment_id:{
        type:Sequelize.INTEGER,
        allowNull:true
      },
      like_type:{
        type:Sequelize.STRING,
        allowNull:false,
        defaultValue:"post"
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
    await queryInterface.dropTable('likes');
  }
};