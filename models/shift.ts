import { Model } from 'sequelize';
export default (sequelize: any, DataTypes: { DATE: any; }) => {
  class Shift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      this.belongsTo(models.User, {foreignKey: 'userId'});
      this.hasMany(models.Sell, {foreignKey: 'sellId'});
    }
  }
  Shift.init({
    startedAt: DataTypes.DATE,
    finishedAt: DataTypes.DATE
  }, {
    sequelize,
    tableName: 'shifts',
    modelName: 'Shift',
  });
  return Shift;
};