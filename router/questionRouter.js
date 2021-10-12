import express from 'express';
import * as questionController from '../controller/questionController.js';
import { body } from 'express-validator';
import { isAuthQuestion } from '../middleware/authentication.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateQuestion = [
  body('content')
    .trim()
    .isLength({ min: 4 })
    .withMessage('Centent should be at least 4 characters'),
  validate,
];

router.post('/', isAuthQuestion, validateQuestion, questionController.createQuestion);

router.put('/:id', isAuthQuestion, validateQuestion, questionController.updateQuestion);

router.delete('/:id', isAuthQuestion, questionController.deleteQuestion); 

router.get('/', questionController.getQuestions);
router.get('/:id', questionController.getQuestion);

export default router;