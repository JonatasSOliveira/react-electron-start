const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        cod_interno: DataTypes.INTEGER,
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

module.exports = Cliente;