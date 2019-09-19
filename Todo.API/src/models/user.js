const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    tasks: {
        type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Task' } ],
    },
    avatarURL: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'
    }

})


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
  }

const User = mongoose.model('User', userSchema, 'users');

function validateUser(user) {
    const schema = {
        username: Joi.string().min(4).max(16).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(255).required(),
        tasks: Joi.array().items(Joi.string()),
        avatarURL: Joi.string()
    }
    return Joi.validate(user, schema);
}


exports.userSchema = userSchema;
exports.validate = validateUser;
exports.User = User;