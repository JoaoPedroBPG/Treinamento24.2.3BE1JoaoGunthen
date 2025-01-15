import { Router } from 'express';

import UsersController from '../controller/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/register', usersController.create);
usersRoutes.get('/read', usersController.list);
usersRoutes.delete('/delete/:id', usersController.delete);

export default usersRoutes;
