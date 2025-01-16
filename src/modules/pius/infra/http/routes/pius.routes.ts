import { CreatePiuValidation } from '@modules/pius/validations/CreatePiuValidation';
import { Router } from 'express';
import { validateTest } from 'middlewares/validation';

import PiusController from '../controller/PiusController';

const piusRoutes = Router();

const piusController = new PiusController();

piusRoutes.post('/post', CreatePiuValidation, validateTest, piusController.create);
piusRoutes.get('/read', piusController.list);
piusRoutes.delete('/delete/:id', piusController.delete);
piusRoutes.put('/update/:id', CreatePiuValidation, validateTest, piusController.update);

export default piusRoutes;
