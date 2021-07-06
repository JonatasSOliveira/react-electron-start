const { Model, DataTypes } = require("sequelize");

class Estado extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        uf: DataTypes.STRING,
        dt_hr_exclusao: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Estado;