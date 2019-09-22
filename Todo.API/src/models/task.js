const mongoose = require('mongoose');
const Joi = require('joi');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16
    },
    text: {
        type: String,
        maxlength: 255
    },
    tags: {
        type: Array,
    },
    timeCreated: {
        type: Date,
        default: Date.now
    },
    isDone: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema, 'tasks');

function validateTask(task) {
    const schema = {
        title: Joi.string().min(4).max(16).required(),
        text: Joi.string().max(255),
        tags: Joi.array().items(Joi.string()),
        isDone: Joi.boolean()
    }
    return Joi.validate(task, schema);
}
function validateUpdateTask(task) {
    const schema = {
        title: Joi.string().min(4).max(16),
        text: Joi.string().max(255),
        tags: Joi.array().items(Joi.string()),
        isDone: Joi.boolean()
    }
    return Joi.validate(task, schema);
}

exports.taskSchema = taskSchema;
exports.validate = validateTask;
exports.validateUpdate = validateUpdateTask;
exports.Task = Task;