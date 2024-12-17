const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  assignedProjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  progress: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model('Candidate', candidateSchema);
