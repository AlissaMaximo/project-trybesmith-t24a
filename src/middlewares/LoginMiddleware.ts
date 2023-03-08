// Feito com ajuda do Ebraim Oliveira

import { NextFunction, Request, Response } from 'express';

export default class LoginMiddleware {
  public verifyUsername = (req: Request, res: Response, next: NextFunction) => {    
    if (!req.body.username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    next();
  };

  public verifyPassword = (req: Request, res: Response, next: NextFunction) => {    
    if (!req.body.password) {
      return res.status(400).json({ message: '"password" is required' });
    }
    next();
  };
}
