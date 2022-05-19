"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.count = exports.getTask = exports.createTask = exports.getTasks = void 0;
const nanoid_1 = require("nanoid");
const db_1 = require("../db");
const getTasks = (req, res) => {
    const data = (0, db_1.getConnection)().get("tasks").value();
    return res.json(data);
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    const { name, description } = req.body;
    const newTask = {
        name,
        description,
        id: (0, nanoid_1.nanoid)()
    };
    try {
        (0, db_1.getConnection)().get("tasks").push(newTask).write();
        res.json(newTask);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.createTask = createTask;
const getTask = (req, res) => {
    const { id } = req.params;
    const task = (0, db_1.getConnection)().get("tasks").find({ id }).value();
    if (task) {
        return res.json(task);
    }
    res.status(404).json({ msg: "Task not found" });
};
exports.getTask = getTask;
const count = (req, res) => {
    const taskLenth = (0, db_1.getConnection)().get("tasks").value().length;
    res.json(taskLenth);
};
exports.count = count;
const deleteTask = (req, res) => {
    const { id } = req.params;
    const task = (0, db_1.getConnection)().get("tasks").find({ id }).value();
    if (task) {
        const deletedTask = (0, db_1.getConnection)().get("tasks").remove({ id }).write();
        return res.json(deletedTask[0]);
    }
    res.status(404).json({ msg: "Task not found" });
};
exports.deleteTask = deleteTask;
const updateTask = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const task = (0, db_1.getConnection)().get("tasks").find({ id }).value();
    if (task) {
        const updatedTask = (0, db_1.getConnection)().get("tasks").find({ id }).assign({ name, description }).write();
        return res.json(updatedTask);
    }
    res.status(404).json({ msg: "Task not found" });
};
exports.updateTask = updateTask;
