import { getAllUsers,
getPutUsers,
CreateUsers,
deleteUser } from "../controller/user.controller.js";
import { Router } from "express";
const router=Router();

router.get('/', getAllUsers);
router.post('/:id', CreateUsers);
router.put('/:id', getPutUsers);
router.delete('/:id', deleteUser);

export default router;