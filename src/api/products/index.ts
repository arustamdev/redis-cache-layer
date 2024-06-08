import express from 'express';

const router = express.Router();

import search from './search';
import topDiscount from './topDiscount';
import bestReview from './bestReview';

router.get('/search', search);
router.get('/topDiscount', topDiscount);
router.get('/bestReview', bestReview);

export default router;
