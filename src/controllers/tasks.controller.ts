import { Handler } from 'express';
import { nanoid } from 'nanoid';
import { getConnection } from '../db';

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get("tasks").value();
    return res.json(data);
};

export const createTask: Handler = (req, res) => {
    const {name, description} = req.body;

    const newTask = {
        name,
        description,
        id: nanoid()
    };

    try {
        getConnection().get("tasks").push(newTask).write();

        res.json(newTask);
    } catch (error) {
        res.status(500).send(error);
    }
    
};

export const getTask: Handler = (req, res) => {
    const {id} = req.params;

    const task = getConnection().get("tasks").find({id}).value();

    if (task) {
        return res.json(task);
    }

    res.status(404).json({msg: "Task not found"});
};

export const count: Handler = (req, res) => {
    const taskLenth = getConnection().get("tasks").value().length;
    res.json(taskLenth);
}

export const deleteTask: Handler = (req, res) => {
    const {id} = req.params;

    const task = getConnection().get("tasks").find({id}).value();

    if (task) {
        const deletedTask = getConnection().get("tasks").remove({id}).write();
        return res.json(deletedTask[0]);
    }

    res.status(404).json({msg: "Task not found"});
};

export const updateTask: Handler = (req, res) => {
    const {id} = req.params;
    const {name, description} = req.body;

    const task = getConnection().get("tasks").find({id}).value();

    if (task) {
        const updatedTask = getConnection().get("tasks").find({id}).assign({name, description}).write();
        return res.json(updatedTask);
    }

    res.status(404).json({msg: "Task not found"});
};