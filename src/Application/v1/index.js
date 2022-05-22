import express from 'express';
import invoice from './invoice/invoice.route';

const router = express.Router();

router.use('/Invoice', invoice);

export default router;
