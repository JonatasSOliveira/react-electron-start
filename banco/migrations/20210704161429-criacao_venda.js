"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("venda", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_empresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "empresa", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "cliente", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_cliente_endereco: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "cliente_endereco", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      cod_interno: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vr_taxa: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      vr_desconto: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable("venda");
  },
};