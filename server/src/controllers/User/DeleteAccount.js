require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../../db');

module.exports = {
  DeleteAccount: async (req, res) => {
    const { authorization } = req.headers;

    try {
      if (!authorization) {
        console.log('No se proporcionó un token de autorización');
        return res.status(400).json({ message: 'No se proporcionó un token de autorización' });
      }
      
      const payload = jwt.verify(authorization, process.env.FIRMA_TOKEN);

      const user = await User.findOne({
        where: { id: payload.id },
      });

      if (!user) {
        console.log('Usuario no encontrado');
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      await User.destroy({
        where: { id: user.id },
      });

      return res.status(200).json({ message: 'Cuenta eliminada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
