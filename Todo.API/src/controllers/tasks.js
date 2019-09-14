const { Task, validate } = require('../models/task');

module.exports = {
  getTaskById: async function (req, res) {
      try {
          const task = await Task.findById(req.params.taskId);
          if (!task) return res.status(404).send('A task with the given ID was not found.');
          res.send(task);

      } catch (error) {
          res.status(500).send('Error occurred');
      }
  }
}