const express = require('express');
const router = express.Router();
const {
	getAllTasks,
	createTasks,
	getTask,
	updateTask,
	deleteTasks,
} = require('../controllers/tasks');

router.get('/', getAllTasks);
router.post('/', createTasks);

router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTasks);

module.exports = router;
