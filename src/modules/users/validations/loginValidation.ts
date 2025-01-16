/* eslint-disable import/prefer-default-export */
import { check } from 'express-validator';

export const loginValidation = [
  check('email', 'Email must be valid').isEmail(),
  check('password', 'Password cannot be empty').notEmpty(),
];
