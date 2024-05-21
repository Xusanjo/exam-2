import { getAllTask,
getOneTask,
getPutTask,
CreateTask,
deleteTask } from "../controller/task.controller.js";
import { Router } from "express";

const router=Router();

router.get('/', getAllTask);
router.get('/:boardid:taskid', getOneTask);
router.put('/:boardid:taskid', getPutTask);
router.post('/:boardid',CreateTask);
router.delete('/:taskid', deleteTask);

export default router;