const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('type', {
    typename: {
      type: DataTypes.STRING,
      // unique: true,
      allowNull: true,
    },
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   unique: true,
    //   autoIncrement: true,
      // validate: {
      //   isNumeric: true,
      // }
    // }
  }, { timestamps: false }
  )
  
  };