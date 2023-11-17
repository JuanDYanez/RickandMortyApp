const { User } = require('../DB_connection')

const postUser = async (req, res) => {
  
  try {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send("Faltan datos")
    }

    const [user, created] = await User.findOrCreate({
      where: { email: email },
      defaults: { password: password }
    });

    if (!created) {
      return res.status(409).send("El usuario ya existe");
    }

    return res.json(user);
    // const user = await User.findOrCreate({
    //   where: { email: email, password: password }
    // });

    // return res.json(user)

  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = postUser;