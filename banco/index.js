const { Sequelize } = require("sequelize");

const config = require("../config/banco");

const sequelize = new Sequelize(config);

const iniciarModelos = () => {
  try {
    console.info("[banco - f iniciarModelos] Iniciando Modelos.");
    // Model.init
    // Model.associate
    console.info("[banco - f iniciarModelos] Modelos Iniciados.");
  } catch (error) {
    console.error("[banco - f iniciarModelos] Erro:", error);
    throw new Error(error);
  }
};

const iniciarBanco = () => {
  try {
    console.info("[banco - f iniciarBanco] Iniciando configurações do banco.");
    iniciarModelos();
    console.info("[banco - f iniciarBanco] Configurações do banco finalizadas.");
  } catch (error) {
    console.error("[banco - f iniciarBanco] Erro:", error);
  }
};

module.exports = { iniciarBanco };
