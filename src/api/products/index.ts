import express from 'express';

const router = express.Router();

import search from './search';
import topDiscount from './topDiscount';
import bestReview from './bestReview';

import { staticCache } from '../../middlewares/staticCache';

router.get('/search', search);
router.get('/topDiscount', staticCache, topDiscount);
router.get('/bestReview', staticCache, bestReview);

export default router;
