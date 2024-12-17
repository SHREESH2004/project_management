const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  title: String,
  description: String,
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Task', taskSchema);
