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
      validate: {
        isAlphanumeric: true,
      },
      get() {
        const rawName = this.getDataValue("name");
        const rawNameLower = rawName.toLowerCase();
        return rawName ? rawNameLower : null;
      },
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    spd: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    type1: {
      type: DataTypes.STRING,
    },
    type2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue:
        "https://art.pixilart.com/738950d3f7c2a97.png",
    },
  }, { timestamps: false }
  );
  };