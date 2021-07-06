const { Model, DataTypes } = require("sequelize");

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        cod_interno: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        vr_custo: DataTypes.DECIMAL,
        vr_venda: DataTypes.DECIMAL,
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
  }
}

module.exports = Produto;