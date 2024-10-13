import { Router } from 'express';
import {
  getContactByIdController,
  getContactsController,
} from '../controllers/contactsController.js';

const router = Router();

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', getContactByIdController);

export default router;
