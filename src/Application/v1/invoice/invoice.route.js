import express from 'express';
import {
  getAllinvoice,
  createinvoice,
  Updateinvoice
} from './invoice.controller';

const router = express.Router();
router.get('/', getAllinvoice);
router.post('/c', createinvoice);
router.post('/u', Updateinvoice);
export default router;
