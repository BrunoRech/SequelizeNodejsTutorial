const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
    /**
     * Find users with email ending with @email.com
     * With this users i want only the ones who live in 'street x'
     * With this user i want only the ones who know techs 'React...'
     */
    async show(req, res) {

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@email.com',
                }
            },
            include: [ // 2 JOINS
                {
                    association: 'addresses',
                    where: {
                        street: 'street x',
                    }
                }, {
                    association: 'techs',
                    // required: false
                    where: {
                        name: {
                            [Op.iLike]: 'React%',
                        }
                    }
                }
            ]
        });
        res.json(users);
    }
}