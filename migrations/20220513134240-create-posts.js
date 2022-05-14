'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_content: {
        type: Sequelize.STRING
      },
    polarity:{
      type:Sequelize.FLOAT,
      allowNull:false
    },
    user_id:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    media_url:{
      type:Sequelize.STRING,
      allowNull:true
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      state:{
        type:Sequelize.DATE,
        //tobe edited with default current date and null == false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};