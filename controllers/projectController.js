const Project = require('../models/Project');
const Candidate = require('../models/Candidate');

exports.assignProject = async (req, res) => {
  const { name, description, candidateId } = req.body;

  const project = new Project({
    name,
    description,
    assignedTo: candidateId,
  });

  await project.save();
  res.redirect('/dashboard');
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().populate('assignedTo');
  res.render('dashboard', { projects });
};

exports.acceptProject = async (req, res) => {
  const { projectId } = req.params;
  await Project.findByIdAndUpdate(projectId, { status: 'In Progress' });
  res.redirect('/dashboard');
};
