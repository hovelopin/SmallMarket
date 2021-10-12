import express from 'express';
import * as smsController from '../controller/smsController.js';
import {} from 'express-async-errors';
import { body } from 'express-validator';
import { isAuth } from '../middleware/authentication.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateSms = [
  body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('text should be at least 3 characters'),
  validate,
];

router.get('/', isAuth, smsController.getSmSs);
router.get('/:id', isAuth, smsController.getSms);

router.post('/', isAuth, validateTweet, smsController.createSms);

router.put('/:id', isAuth, validateTweet, smsController.updateSms);

router.delete('/:id', isAuth, smsController.deleteSms);

export default router;
