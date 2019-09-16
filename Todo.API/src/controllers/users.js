const {
    User,
    validate
} = require('../models/user')



module.exports = {

    getUserById: async function (req, res) {
        try {
            const user = await User.findById(req.params.userId);
            if (!user) return res.status(404).send('A user with the given ID was not found.')
            res.send(user)

        } catch (error) {

            res.status(500).send('Error occurred')
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await User.find().sort('timeCreated');
            res.send(users);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  },

    addUser: async (req, res) => {
        try {
            const { error } = validate(req.body);
            if(error) return res.status(400).send(error.details[0].message);

            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });
            await user.save();
            res.send(user);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
    },

    updateUser: async (req, res) => {
        try {
            const { error } = validate(req.body);
            if(error) return res.status(400).send(error.details[0].message);

            const user = await User.findByIdAndUpdate(
                req.params.id,
                {
                    email: req.body.email,
                    password: req.body.password,
                },
                { new: true});
            if(!user) return res.status(404).send('User not found.');
            res.send(user);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
     },

     removeUser: async (req, res) => {
        try {
            const user = await User.findByIdAndRemove(req.params.id);
            if(!user) return res.status(404).send('User not found.');
            res.send(user);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
     }
}