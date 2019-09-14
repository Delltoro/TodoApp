const mongoose = require('mongoose');
const Joi = require('joi');

const taskSchema = new mongoose.Schema({
    // taskSchema
})

const Task = mongoose.model('Task', taskSchema, 'tasks');

function validateTask(task) {
    const schema = {
        // username: Joi.string().min(4).max(16).required(),
        // email: Joi.string().email().required(),
        // password: Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(task, schema);
}

exports.taskSchema = taskSchema;
exports.validate = validateTask;
exports.Task = Task;