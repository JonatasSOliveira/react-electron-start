const { Model, DataTypes } = require("sequelize");

class VendaItem extends Model {
  static init(sequelize) {
    super.init(
      {
        qtde: DataTypes.DECIMAL,
        vr_custo: DataTypes.DECIMAL,
        vr_venda: DataTypes.DECIMAL,
        observacao: DataTypes.STRING,
        dt_hr_exclusao: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Venda, {
      foreignKey: "id_venda",
      as: "venda",
    });
    this.belongsTo(models.Produto, {
      foreignKey: "id_produto",
      as: "produto",
    });
  }
}

module.exports = VendaItem;