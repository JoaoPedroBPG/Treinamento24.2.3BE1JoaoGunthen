import { createValidation } from '@modules/users/validations/createValidation';
import { Router } from 'express';
import { validateTest } from 'middlewares/validation';

import UsersController from '../controller/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/register', createValidation, validateTest, usersController.create);
usersRoutes.get('/read', usersController.list);
usersRoutes.delete('/delete/:id', usersController.delete);

export default usersRoutes;
