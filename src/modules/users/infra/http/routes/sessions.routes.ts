import { Router } from 'express';
import { loginValidation } from '@modules/users/validations/loginValidation';
import { validateTest } from 'middlewares/validation';
import SessionsController from '../controller/SessionsController';

const sessionsRouter = Router();

const sessionsController = new SessionsController();

sessionsRouter.post('/login', loginValidation, validateTest, sessionsController.create);

export default sessionsRouter;
