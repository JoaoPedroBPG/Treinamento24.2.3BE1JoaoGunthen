import { createValidation } from '@modules/users/validations/createValidation';
import { Router } from 'express';
import { validateTest } from 'middlewares/validation';

import PiusController from '../controller/PiusController';

const piusRoutes = Router();

const piusController = new PiusController();

piusRoutes.post('/register', createValidation, validateTest, piusController.create);
piusRoutes.get('/read', piusController.list);
piusRoutes.delete('/delete/:id', piusController.delete);

export default piusRoutes;
