const { Task, validate, validateUpdate } = require('../models/task');
const {User} = require('../models/user')
const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = {
  getTaskById: async function (req, res) {
        try {
            const task = await Task.findById(req.params.id);
            if (!task) return res.status(404).send('Task not found.');
            res.send(task);

        } catch (error) {
            res.status(500).send('An error occurred.');
        }
  },

  getTasks: async (req, res) => {
        try {
            const token = req.header('x-auth-token');
            const decoded = jwt.verify(token, config.get('jwtPrivateKey'));

            const user = await User
                                .findById(decoded._id)
                                .populate('tasks');

            if (!user) return res.status(404).send('A user with the given ID was not found.')

            res.send(user.tasks);
            
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  },

  addTask: async (req, res) => {
        try {
            const { error } = validate(req.body);
            if(error) return res.status(400).send(error.details[0].message);
            const token = req.header('x-auth-token');
            const decoded = jwt.verify(token, config.get('jwtPrivateKey'));

            const user = await User.findById(decoded._id);
            if (!user) return res.status(404).send('A user with the given ID was not found.')

            const task = new Task({
                title: req.body.title,
                text: req.body.text,
                tags: req.body.tags,
                timeCreated: new Date(),
                isDone: false
            });

            await task.save();
            user.tasks.push(task._id);
            user.save();

            res.send(task);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  },

  updateTask: async (req, res) => {
        try {
            const { error } = validateUpdate(req.body);
            if(error) return res.status(400).send(error.details[0].message);

            const update = req.body;

            const task = await Task.findByIdAndUpdate(
                req.params.id, update,
                { new: true});
            if(!task) return res.status(404).send('Task not found.');
            res.send(task);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  },

  removeTask: async (req, res) => {
        try {
            const user = await User
                .findById(req.user._id)
                .populate('tasks');

            user.tasks = user.tasks.filter((item) => { return (item._id != req.params.id) })
            user.save();

            const task = await Task.findByIdAndRemove(req.params.id);
            if(!task) return res.status(404).send('Task not found.');
            res.send(task);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  }
}