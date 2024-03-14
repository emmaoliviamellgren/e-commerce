const User = require('../schemas/userSchema')

//Vi vill exportera detta som en namngedd export

exports.fetchUser = async (req, res) => {

  try {
    const getUser = await User.find({});
    res.json(getUser);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' })
  }

}

exports.registerUser = async (req, res) => {

    try {
      const { email, password } = req.body;

      const regUser = await User.create({ email, password })
      res.status(201).json(regUser)

    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: 'Something went wrong!' })
    }
}