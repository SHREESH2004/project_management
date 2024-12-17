const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const { projectId } = req.params;
  const tasks = await Task.find({ projectId });
  res.render('progress', { tasks });
};

exports.updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  await Task.findByIdAndUpdate(taskId, { status: 'Completed' });
  res.redirect('back');
};
