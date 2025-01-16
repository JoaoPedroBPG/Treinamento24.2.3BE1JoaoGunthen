/* eslint-disable import/prefer-default-export */
import { check } from 'express-validator';

export const CreatePiuValidation = [
  check('texto', 'Text cannot be empty').notEmpty(),
  check('texto', 'Text lenth must be less than 140').isLength({ min: 1, max: 140 }),
];
