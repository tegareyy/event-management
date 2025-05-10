import { ErrorRespone, SuccessResponse } from "../../utils/api-response";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";

class Controller {
  async register(req: Request, res: Response) {
    try {
      const result = await AuthService.register({
        data: req.body,
      });

      SuccessResponse({
        res,
        data: result,
      });
    } catch (error) {
      ErrorRespone({ res, message: `Internal Server Error` });
    }
  }
}

export const AuthController = new Controller();
