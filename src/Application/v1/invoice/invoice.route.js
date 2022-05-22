import express from 'express';
import {
  getAllInvoices,
  GetInvoiceSlope,
  createInvoice,
  updateInvoice
} from './invoice.controller';

const router = express.Router();
router.get('/', getAllInvoices);
router.get('/:document', GetInvoiceSlope);
router.post('/', createInvoice);
router.put('/:idInvoice', updateInvoice);
export default router;
