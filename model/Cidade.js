const { Model, DataTypes } = require("sequelize");

class Cidade extends Model {
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
    this.belongsTo(models.Estado, {
      foreignKey: "id_estado",
      as: "estado",
    });
  }
}

module.exports = Cidade;