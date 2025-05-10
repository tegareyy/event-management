import { Router } from "express";
import { authMiddlware } from "./auth.middleware";
import { AuthController } from "./auth.controller";

export const AuthRouter = Router().post("/register", authMiddlware.registerMiddleware, AuthController.register);
