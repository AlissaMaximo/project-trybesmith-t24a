import { NextFunction, Request, Response } from 'express';

export default class OrderProductsMiddleware {
  public verifyExists = (req: Request, res: Response, next: NextFunction) => {
    const { body: { productsIds } } = req;

    if (!productsIds) {
      return res.status(400).json({ message: '"productsIds" is required' });
    }

    next();
  };

  public verifyIsArray = (req: Request, res: Response, next: NextFunction) => {
    const { body: { productsIds } } = req;

    const isArray = Array.isArray(productsIds);
    
    if (!isArray) {
      return res.status(422).json({ message: '"productsIds" must be an array' });
    }

    next();
  };

  public verifyIsNumberArray = (req: Request, res: Response, next: NextFunction) => {
    const { body: { productsIds } } = req;

    const arrayIsPopulated = productsIds.length > 1;

    const isNotNumber = productsIds
      .some((productId: number) => typeof productId !== 'number');

    console.log(isNotNumber);
      
    if (isNotNumber || !arrayIsPopulated) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }

    next();
  };
}