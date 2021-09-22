import express from 'express';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateCredential = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username should be at least 4 characters'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password should be at least 8 characters'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('Name is missing'),
  body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
  validate,
];

// TODO: make router using controller -> userController

export default router;
