require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT
} = process.env;
/* postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE} */
/* postgres://postgres.nouljhvbupfrkesvxpjb:reciclaje98.@aws-0-us-west-1.pooler.supabase.com:5432/postgres */
const sequelize = new Sequelize(`postgres://postgres.nouljhvbupfrkesvxpjb:reciclaje98.@aws-0-us-west-1.pooler.supabase.com:5432/postgres`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
/*  dialectOptions: {
    ssl: {
      require: true, // Activar SSL
    },
  }   */ 
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Leads, Lotes  } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
/* Leads.belongsToMany(Lotes,{ through: 'Leads_lotes'});
Lotes.belongsToMany(Leads,{ through: 'Leads_lotes'});  */


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
