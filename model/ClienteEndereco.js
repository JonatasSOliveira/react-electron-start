const { Model, DataTypes } = require("sequelize");

class ClienteEndereco extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        cod_interno: DataTypes.INTEGER,
        dt_hr_exclusao: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cliente, {
      foreignKey: "id_cliente",
      as: "cliente",
    });
    this.belongsTo(models.Bairro, {
      foreignKey: "id_bairro",
      as: "bairro",
    });
  }
}

module.exports = ClienteEndereco;