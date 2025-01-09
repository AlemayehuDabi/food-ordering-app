import express, { Router } from "express";

import { createCurrentUser } from "../controllers/UserController";

const router: Router = express.Router();

router.post("/", createCurrentUser);

export default router;
