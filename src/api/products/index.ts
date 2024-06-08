import express from 'express';

const router = express.Router();

import search from './search';
import topDiscount from './topDiscount';

router.get('/search', search);
router.get('/topDiscount', topDiscount);

export default router;
