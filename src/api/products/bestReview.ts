import ProductModel from '../../models/Product';
import { Request, Response, NextFunction } from 'express';

async function bestReview(req: Request, res: Response, next: NextFunction) {
  try {
    const products = await ProductModel.aggregate([
      {
        $addFields: {
          reviewsRating: { $avg: '$reviews.rating' },
        },
      },
      {
        $sort: { reviewsRating: -1 },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          category: 1,
          price: 1,
          reviewsRating: 1,
          discountPercentage: 1,
        },
      },
    ]);

    res.status(200).json({
      products,
    });
  } catch (error) {
    next(error);
  }
}

export default bestReview;
