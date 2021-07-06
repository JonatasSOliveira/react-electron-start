const { Sequelize } = require("sequelize");

const config = require("../config/banco");

const sequelize = new Sequelize(config);

const {
  Bairro,
  Cidade,
  Cliente,
  ClienteEndereco,
  Empresa,
  EmpresaUsuario,
  Estado,
  Produto,
  Usuario,
  Venda,
  VendaItem,
} = require("../model/index");

const iniciarModelos = () => {
  try {
    console.info("[banco - f iniciarModelos] Iniciando Modelos.");
    Bairro.init(sequelize);
    Cidade.init(sequelize);
    Cliente.init(sequelize);
    ClienteEndereco.init(sequelize);
    Empresa.init(sequelize);
    EmpresaUsuario.init(sequelize);
    Estado.init(sequelize);
    Produto.init(sequelize);
    Usuario.init(sequelize);
    Venda.init(sequelize);
    VendaItem.init(sequelize);

    Bairro.associate(sequelize.models);
    Cidade.associate(sequelize.models);
    Cliente.associate(sequelize.models);
    ClienteEndereco.associate(sequelize.models);
    EmpresaUsuario.associate(sequelize.models);
    Produto.associate(sequelize.models);
    Venda.associate(sequelize.models);
    VendaItem.associate(sequelize.models);
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
