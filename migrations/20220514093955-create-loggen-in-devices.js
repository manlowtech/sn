'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loggen_in_devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dev_name: {
        type: Sequelize.STRING
      },
      location_cood:{
        type:Sequelize.STRING,
        allowNull:false
      },
      location_name:{
        type:Sequelize.STRING,
        allowNull:true
      },
      user_id:Sequelize.INTEGER,
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
    await queryInterface.dropTable('loggen_in_devices');
  }
};