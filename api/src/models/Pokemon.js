const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      // autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,

      // validate: {
      //   isNumeric: true,
      //   doesNotExistInPokeApi: function(value) {
      //     //validating function 
      //   }
      // }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    atk: {
      type: DataTypes.INTEGER,
    },
    def: {
      type: DataTypes.INTEGER,
    },
    spd: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.FLOAT,
    },
    weight: {
      type: DataTypes.FLOAT,
    },
    type1: {
      type: DataTypes.STRING,
    },
    type2: {
      type: DataTypes.STRING,
    },
    
  }, { timestamps: false }
  );
  };

