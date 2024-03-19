const User = require('../schemas/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // If authorization header exists, return the token value of the bearer prop from the header
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) return res.status(401).send('Access unauthorized');

    // Check if user has valid token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if(error) return res.status(403).send('Token no longer valid');
        req.user = user;
        next();
    });
};

exports.registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Password encryption
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ email, password: hashedPassword });

        // Authentication (token expires in 1h)
        const auth = await jwt.sign(
            user.email,
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ message: 'User created!', token: auth });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.logInUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Finding user in db
        const user = await User.findOne({ email });

        if (user == null) {
            return res.status(400).json({ message: 'Cannot find user' });
        }
        // Authentication (token expires in 1h)
        const auth = await jwt.sign(
            user.email,
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );

        // Comparing encrypted password to password that was input
        if (await bcrypt.compare(password, user.password)) {
            return res
                .status(200)
                .json({ message: 'User logged in!', token: auth });
        } else {
            return res.status(401).json({ message: 'Invalid password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Could not login user' });
    }
};
