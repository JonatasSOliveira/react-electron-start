const { Model, DataTypes } = require("sequelize");

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        razao_social: DataTypes.STRING,
        nome_fantasia: DataTypes.STRING,
        doc_federal: DataTypes.STRING,
        dt_hr_exclusao: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Empresa;