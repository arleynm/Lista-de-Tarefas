const tasksModel = require('../models/tasksModels.js');


const getAll =  async (request, response) => {

    const tasks = await tasksModel.getAll();

    return response.status(200).json(tasks);
}

const createTasks =  async (request, response) => {

    const createTasks = await tasksModel.createTasks(request.body);

    return response.status(200).json(createTasks);
}

const deleteTasks =  async (request, response) => {

    const {id} = request.params;

    await tasksModel.deleteTasks(id);

    return response.status(204).json(); 
}

const updateTasks = async (request, response) => {
    const {id} = request.params;

    await tasksModel.updateTasks(id, request.body);

    return response.status(204).json(); 
};  


module.exports = {
    getAll,
    createTasks,
    deleteTasks,
    updateTasks
};