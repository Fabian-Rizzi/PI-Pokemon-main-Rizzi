const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('type', {
    type: {
      type: DataTypes.STRING,
      unique: true,
      // allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      // validate: {
      //   isNumeric: true,
      // }
    }
  }, { timestamps: false }
  )
  
  };