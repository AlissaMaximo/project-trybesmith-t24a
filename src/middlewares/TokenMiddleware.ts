import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import JWTGenerator from '../services/utils/tokenGenerator';

type TPayload = {
  id: string,
};

export default class TokenMiddleware {
  public jwtGenerator = new JWTGenerator();

  public verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const verifiedToken = verify(token, this.jwtGenerator.mySecret) as TPayload;
      console.log(verifiedToken);
      req.body.id = verifiedToken.id;
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    next();
  };
}