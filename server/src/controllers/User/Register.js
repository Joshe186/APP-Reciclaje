const { User } = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;

require('dotenv').config();


module.exports = {
  Register: async (req, res) => {
    const { name,  email, password, country, comuna, city, role } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        console.log('El usuario ya existe');
        return res.status(400).json({ message: 'El usuario ya existe' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

     
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        country,
        comuna,
        city,
        role,
      });

      const tokenPayload = { id: newUser.id, role: newUser.role };
      const token = jwt.sign(tokenPayload, process.env.FIRMA_TOKEN );

      console.log('Usuario creado correctamente');
      return res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
