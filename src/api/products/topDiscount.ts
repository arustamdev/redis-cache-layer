import ProductModel from '../../models/Product';
import { Request, Response, NextFunction } from 'express';

async function topDiscount(req: Request, res: Response, next: NextFunction) {
  try {
    const products = await ProductModel.find({}, null, { sort: { discountPercentage: -1 }, limit: 5 });

    res.status(200).json({
      products,
    });
  } catch (error) {
    next(error);
  }
}

export default topDiscount;
