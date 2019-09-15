const { Task, validate } = require('../models/task');

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
            const tasks = await Task.find().sort('timeCreated');
            res.send(tasks);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  },

  addTask: async (req, res) => {
        try {
            const { error } = validate(req.body);
            if(error) return res.status(400).send(error.details[0].message);

            const task = new Task({
                title: req.body.title,
                text: req.body.text,
                tags: req.body.tags,
                timeCreated: new Date(),
                isDone: false
            });
            await task.save();
            res.send(task);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  },

  updateTask: async (req, res) => {
        try {
            const { error } = validate(req.body);
            if(error) return res.status(400).send(error.details[0].message);

            const task = await Task.findByIdAndUpdate(
                req.params.id,
                {
                    title: req.body.title,
                    text: req.body.text,
                    tags: req.body.tags,
                    isDone: req.body.isDone
                },
                { new: true});
            if(!task) return res.status(404).send('Task not found.');
            res.send(task);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  },

  removeTask: async (req, res) => {
        try {
            const task = await Task.findByIdAndRemove(req.params.id);
            if(!task) return res.status(404).send('Task not found.');
            res.send(task);
        } catch (error) {
            res.status(500).send('An error occured.');
        }
  }
}