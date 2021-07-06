const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        login: DataTypes.STRING,
        senha: DataTypes.STRING,
        dt_hr_exclusao: DataTypes.DATE,
        tipo_usuario: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Usuario;