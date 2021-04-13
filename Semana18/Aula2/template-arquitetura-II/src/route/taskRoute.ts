import express from 'express'
import { createTask } from '../controller/createTask';
import { getTaskById } from '../controller/getTaskById';

const taskRoute = express.Router();

taskRoute.put("/", createTask)
taskRoute.get('/:id', getTaskById)

export default taskRoute