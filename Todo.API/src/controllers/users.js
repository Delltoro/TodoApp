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
    }


}