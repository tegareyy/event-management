import { errorResponse, successResponse } from "../../utils/api-response";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";

class Controller {
  async register(req: Request, res: Response) {
    try {
      const result = await AuthService.register({
        data: req.body,
      });

      successResponse({
        res,
        data: result,
      });
    } catch (error) {
      errorResponse({ res, error });
    }
  }
}

export const AuthController = new Controller();
