import type { NextFunction, Request, Response } from "express";

export function test(req: Request, res: Response, next: NextFunction) {
  console.log('test middleware');
  next();
}