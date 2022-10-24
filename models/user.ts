import { Model } from 'sequelize';
export default (sequelize: any, DataTypes: { STRING: any; }) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      this.hasMany(models.Shift, {foreignKey: 'userId'});
    }
  }
  User.init({
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};