const { Model, DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'categories'; // nombre de la tabla

const CategorySchema = {
  // El esquema define la estructura de la BD.
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  category_name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Movie, {
      as: 'movies',
      foreignKey: 'categoryId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    };
  }
}

module.exports = { Category, CATEGORY_TABLE, CategorySchema };
