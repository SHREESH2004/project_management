const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/progress/:projectId', taskController.getTasks);
router.post('/update-task-status/:taskId', taskController.updateTaskStatus);

module.exports = router;
