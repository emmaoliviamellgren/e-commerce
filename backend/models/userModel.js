const User = require('../schemas/userSchema')
const bcrypt = require('bcrypt')

exports.logInUser = async (req, res) => {

  try {
    
  } catch (error) {
    res.status(500).json({ message: 'Could not log in user :(' })
  }

}

exports.registerUser = async (req, res) => {
  
  try {
    
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({ email, password: hashedPassword })

    res.status(201).json({ message: 'User created!' })
    
  } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: 'Something went wrong!' })
    }
  }
  
  exports.fetchUser = async (req, res) => {
  
    try {
      const getUser = await User.find({});
      res.json(getUser);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!' })
    }
  
  }