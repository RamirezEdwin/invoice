import express from 'express';
import invoice from './invoice/invoice.route';


const router = express.Router();

router.use('/Invoice', invoice);
router.use('/c', invoice)
router.use('/u', invoice)

export default router;
