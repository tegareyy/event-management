import express, { Application } from "express";
import { AuthRouter } from "../api/auth/auth.route";

export default class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  private routes() {
    const apiPrefix = "/api";
    this.express.use(`${apiPrefix}`, AuthRouter);
  }
}
