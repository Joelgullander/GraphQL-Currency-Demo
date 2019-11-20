import { Request, Response, NextFunction } from 'express';

const unless = (path: string, middleware: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
      if (path === req.path) {
          return next();
      } else {
          return middleware(req, res, next);
      }
  };
};

export default unless;
