const { request } = require('express');
const connection = require('./connection');

const getAll = async () =>{
    const [tasks] = await connection.execute('SELECT * FROM tasks');

    return tasks;
};

const createTasks = async (tasks) => {
    const {title} = tasks;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks (title, status, create_id) VALUES(?,?,?)';

    const [createTasks] = await connection.execute(query, [title, 'pendente', dateUTC]);

    return{insertId: createTasks.insertId};
};

const deleteTasks = async (id) => {
    const removedTasks = await connection.execute('DELETE FROM tasks WHERE id = ?',[id]);
    return removedTasks;
};

const updateTasks = async (id, tasks) => {
    const{title, status} = tasks;

    const updateTasks = await connection.execute('UPDATE tasks SET title=?, status = ? WHERE id=?',[title, status, id]);
    return updateTasks;
};

module.exports = {
    getAll,
    createTasks,
    deleteTasks,
    updateTasks
};