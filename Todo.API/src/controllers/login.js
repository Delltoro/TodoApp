const {User} = require('../models/user')

const bcrypt = require('bcrypt');
const Joi = require('joi');

function validateLogin(user) {
    const schema = {
        username: Joi.string().min(4).max(16).required(),
        password: Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(user, schema);
}

module.exports = {
    login: async (req, res) => {
        try {
            const { error } = validateLogin(req.body); 
            if (error) return res.status(400).send(error.details[0].message);

            let user = await User.findOne({ username: req.body.username });
            if (!user) return res.status(400).send('Invalid username or password.');
            
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) return res.status(400).send('Invalid username or password.');
            
            const token = user.generateAuthToken();
            res.send(token);

        } catch (error) {
            res.status(500).send('An error occured.');
        }
     }
}
