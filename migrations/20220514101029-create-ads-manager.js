'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ads_managers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ad_content: {
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
      
      state:{
        type:Sequelize.DATE,
        //tobe edited with default current date and null == false
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
    await queryInterface.dropTable('ads_managers');
  }
};