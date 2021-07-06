"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("venda_item", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_venda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "venda", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "produto", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      qtde: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      vr_custo: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      vr_venda: {
        type: Sequelize.DECIMAL,
        allowNull: false,
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
    await queryInterface.dropTable("venda_item");
  },
};