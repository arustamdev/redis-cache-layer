import express from 'express';
import ProductModel from '../../models/Product';

const router = express.Router();

router.get('/search', async (req, res, next) => {
  const query = req.query.q;

  try {
    const products = await ProductModel.find({ title: { $regex: query, $options: 'i' } });

    res.status(200).json({
      products,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
