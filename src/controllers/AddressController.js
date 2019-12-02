const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { zipcode, street, number } = req.body;
        const { user_id } = req.params;
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ error: 'Invalid User' });
        }

        const address = await Address.create({ zipcode, street, number, user_id });
        return res.json(address);
    },

    async index(req, res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id, {
            include: {
                association: 'addresses',
            }
        });

        return res.json(user.addresses);
    }
}