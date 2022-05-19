"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schemas:
 *   Task:
 *    type: object
 *    properties:
 *     id:
 *      type: string
 *      description: the auto generated id
 *     name:
 *      type: string
 *      description: the name of the task
 *     description:
 *      type: string
 *      description: the description of the task
 *    required:
 *     - name
 *     - description
 *    example:
 *     id: 5e9f8f8f-f9f9-4f9f-9f9f-9f9f9f9f9f9f
 *     name: "Task 1"
 *     description: "This is a task"
 *   TasNotFound:
 *    type: object
 *    properties:
 *     msg:
 *      type: string
 *      description: the error message
 *    example:
 *     msg: "Task not found"
 *  parameters:
 *   taskid:
 *    in: path
 *    name: id
 *    required: true
 *    schema:
 *     type: string
 *    description: the id of the task
 */
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks management
 */
/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: Get all tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A successful response
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Task'
 */
router.get('/tasks', tasks_controller_1.getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *   summary: Get the number of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A successful response
 *     content:
 *      text/plain:
 *       schema:
 *        type: integer
 *        example: 5
 */
router.get('/tasks/count', tasks_controller_1.count);
/**
 * @swagger
 * /tasks:
 *  post:
 *   summary: Create a new task
 *   tags: [Tasks]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Task'
 *   responses:
 *    200:
 *     description: A successful response
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Task'
 *    500:
 *     description: An error occurred
 */
router.post('/tasks', tasks_controller_1.createTask);
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *   summary: Get a task by id
 *   tags: [Tasks]
 *   parameters:
 *    - $ref: '#/components/parameters/taskid'
 *   responses:
 *    200:
 *     description: A successful response
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Task'
 *    404:
 *     description: Not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/TasNotFound'
 */
router.get('/tasks/:id', tasks_controller_1.getTask);
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *   summary: Delete a task by id
 *   tags: [Tasks]
 *   parameters:
 *    - $ref: '#/components/parameters/taskid'
 *   responses:
 *    200:
 *     description: A successful response
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Task'
 *    404:
 *     description: Not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/TasNotFound'
 */
router.delete('/tasks/:id', tasks_controller_1.deleteTask);
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *   summary: Update a task by id
 *   tags: [Tasks]
 *   parameters:
 *    - $ref: '#/components/parameters/taskid'
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Task'
 *   responses:
 *    200:
 *     description: A successful response
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Task'
 *    404:
 *     description: Not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/TasNotFound'
 */
router.put('/tasks/:id', tasks_controller_1.updateTask);
exports.default = router;
