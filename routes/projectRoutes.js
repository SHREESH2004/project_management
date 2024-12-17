const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/dashboard', projectController.getProjects);
router.post('/assign-project', projectController.assignProject);
router.put('/projects/accept/:projectId', projectController.acceptProject);

module.exports = router;
