const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');


const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validarFieldTitle, tasksController.createTasks);
router.delete('/tasks/:id', tasksController.deleteTasks);
router.put('/tasks/:id', tasksMiddleware.validarFieldTitle, tasksMiddleware.validarFieldStatus, tasksController.updateTasks);

module.exports = router;

