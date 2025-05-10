import { Request, Response, NextFunction } from "express";
import { RegisterSchema } from "./auth.schema";
import { UserService } from "../user/user.service";
import { ComparePassword, HashPassword } from "../../utils/bcrypt";

class Middleware {
  async registerMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = RegisterSchema.parse(req.body);

      const checkEmail = await UserService.fetchUserByEmail(validated.email);

      if (checkEmail) throw new Error(`Email Already Exist`);

      req.body = {
        ...validated,
        password: await HashPassword(validated.password),
      };

      next();
    } catch (error) {
      next(error);
    }
  }

  async loginMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = RegisterSchema.parse(req.body);

      const user = await UserService.fetchUserByEmail(validated.email);
      if (!user || user.is_deleted) throw new Error(`Email Not Found`);

      const checkPass = await ComparePassword(validated.password, user.password);
      if (!checkPass) throw new Error(`Invalid Password`);

      req.body = validated;

      next();
    } catch (error) {
      next(error);
    }
  }
}

export const authMiddlware = new Middleware();
