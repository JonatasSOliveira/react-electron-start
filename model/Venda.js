const { Model, DataTypes } = require("sequelize");

class Venda extends Model {
  static init(sequelize) {
    super.init(
      {
        cod_interno: DataTypes.INTEGER,
        vr_taxa: DataTypes.DECIMAL,
        vr_desconto: DataTypes.DECIMAL,
        observacao: DataTypes.STRING,
        dt_hr_exclusao: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Empresa, {
      foreignKey: "id_empresa",
      as: "empresa",
    });
    this.belongsTo(models.Cliente, {
      foreignKey: "id_cliente",
      as: "cliente",
    });
    this.belongsTo(models.ClienteEndereco, {
      foreignKey: "id_cliente_endereco",
      as: "cliente_endereco",
    });
  }
}

module.exports = Venda;
