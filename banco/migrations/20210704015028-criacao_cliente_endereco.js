"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cliente_endereco", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "cliente", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_bairro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "bairro", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      cod_interno: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rua:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cod_interno: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dt_hr_exclusao: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cliente_endereco");
  },
};