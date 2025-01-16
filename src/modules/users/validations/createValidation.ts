/* eslint-disable import/prefer-default-export */
import { check } from 'express-validator';
import isCpf from 'middlewares/validators/isCPF';

export const createValidation = [
  check('name', 'Name cannot be empty').notEmpty(),
  check('email', 'Email must be valid').isEmail().notEmpty(),
  check('cpf', 'CPF cannot be empty').custom(isCpf).notEmpty(),
  check('phone', 'Phone number must be valid').isMobilePhone('pt-BR').notEmpty(),
  check('password', 'Password cannot be empty').notEmpty(),
];
