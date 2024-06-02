const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
    },



    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },

    country: {
      type: DataTypes.STRING
    },
    comuna: {
      type: DataTypes.STRING
    },

    city: {
      type: DataTypes.STRING
    },
 





    role: {
      type: DataTypes.STRING
    },



  },);
};
