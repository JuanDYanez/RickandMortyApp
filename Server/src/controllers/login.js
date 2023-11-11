const users = require ('../utils/users')


const login = (req, res) => {
  const { email, password } = req.query;

  let loginUser = users.find((user) => user.email === email && user.password === password)

  loginUser
    ? res.status(200).json({ access: true })
    : res.status(404).json({ access: false })
};

module.exports = {
  login,
};