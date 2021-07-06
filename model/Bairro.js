const { Model, DataTypes } = require("sequelize");

class Bairro extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        dt_hr_exclusao: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cidade, {
      foreignKey: "id_cidade",
      as: "cidade",
    });
  }
}

module.exports = Bairro;