const { Model, DataTypes } = require("sequelize");

class EmpresaUsuario extends Model {
  static init(sequelize) {
    super.init(
      {
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
    this.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuario",
    });
  }
}

module.exports = EmpresaUsuario;