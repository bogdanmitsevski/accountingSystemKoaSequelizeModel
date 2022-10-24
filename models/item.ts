import { Model } from 'sequelize';
export default (sequelize: any, DataTypes: { STRING: any; INTEGER: any; }) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      this.belongsTo(models.Sell, {foreignKey: 'itemId'});
    }
  }
  Item.init({
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    tableName: 'items',
    modelName: 'Item',
  });
  return Item;
};