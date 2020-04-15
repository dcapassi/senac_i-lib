import Sequelize, { Model } from "sequelize";

class avatar extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
      },
      {
        freezeTableName: true,
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.usuarios, {
      foreignKey: "id_usuario",
      as: "usuario",
    });
  }
}

export default avatar;
