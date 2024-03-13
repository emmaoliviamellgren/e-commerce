const User = require('../schemas/usersSchema')

//Vi vill exportera detta som en namngedd export

exports.fetchUser = async (req, res) => {

  try {
    const getUser = await User.find({});
    res.json(getUser);
    console.log(getUser)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' })
  }

}

exports.registerUser = (req, res) => {
    
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400).json({ message: 'Please enter all fields correctly'})
    return
  }

  User.create({ email, password })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong!' })
    })

}