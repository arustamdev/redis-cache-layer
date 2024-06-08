import ProductModel from '../../models/Product';
import { Request, Response, NextFunction } from 'express';

async function search(req: Request, res: Response, next: NextFunction) {
  const query = req.query.q;

  try {
    const products = await ProductModel.find({ title: { $regex: query, $options: 'i' } });

    res.status(200).json({
      products,
    });
  } catch (error) {
    next(error);
  }
}

export default search;
