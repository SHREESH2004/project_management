const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: { type: String, default: 'Assigned' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
});

module.exports = mongoose.model('Project', projectSchema);
