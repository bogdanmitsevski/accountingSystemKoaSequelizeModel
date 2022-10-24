import { Model } from 'sequelize';
export default (sequelize: any, DataTypes: { INTEGER: any; }) => {
  class Sell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      this.belongsTo(models.Shift, {foreignKey: 'sellId'});
      this.hasMany(models.Item, {foreignKey: 'itemId'});
    }
  }
  Sell.init({
    shiftId: {type: DataTypes.INTEGER, allowNull: false},
    itemId: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    tableName: 'sells',
    modelName: 'Sell',
  });
  return Sell;
};