const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      validate: {
        isNumeric: true,
        doesNotExistInPokeApi: function(value) {
          //validating function 
        }
      }
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
  });
  };

