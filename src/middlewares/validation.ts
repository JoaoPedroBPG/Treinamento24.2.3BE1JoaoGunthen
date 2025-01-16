/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validateTest = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};
