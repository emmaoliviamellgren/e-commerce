const Message = require('../schemas/messageSchema');

exports.sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Please fill in each field.' })
        }

        const sendMessage = await Message.create({ name, email, message });
        res.status(200).json(sendMessage);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: 'Message could not be sent.' });
    }
};
