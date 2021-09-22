import jwt from 'jsonwebtoken';
import { config } from '../config.js';

const AUTHENTICATION_ERROR = { message: 'Authentication Error' };