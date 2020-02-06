'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('empresasAereas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      razonsocial: {
        type: Sequelize.STRING
      },
      codigoclase: {
        type: Sequelize.STRING
      },
      clase: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      localidad: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('empresasAereas');
  }
};