import { getAllBoard,
getPutBoard,
getOneBoard,
CreateBoard,
deleteBoard } from "../controller/board.controller.js";
import { Router } from "express";

const router=Router();

router.get('/', getAllBoard);
router.get('/:id', getOneBoard);
router.put('/:id', getPutBoard);
router.post('/', CreateBoard);
router.delete('/:id', deleteBoard);

export default router;