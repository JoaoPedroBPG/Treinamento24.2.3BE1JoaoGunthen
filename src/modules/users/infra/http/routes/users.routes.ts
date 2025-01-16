import { Router } from 'express';

import { loginValidation } from '@modules/users/validations/loginValidation';
import { validate } from 'uuid';
import UsersController from '../controller/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/register', usersController.create);
usersRoutes.get('/read', usersController.list);
usersRoutes.delete('/delete/:id', usersController.delete);
usersRoutes.post('/login', loginValidation, validate, usersController.login);

export default usersRoutes;
