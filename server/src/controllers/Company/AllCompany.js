require('dotenv').config();
const { User } = require('../../db');

module.exports = {
  AllCompany: async (req, res) => {
    try {
      const companies = await User.findAll({
        where: {
          role: 'empresa' // Filtrar por usuarios con role 'empresa'
        }
      });

      res.status(200).send(companies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
