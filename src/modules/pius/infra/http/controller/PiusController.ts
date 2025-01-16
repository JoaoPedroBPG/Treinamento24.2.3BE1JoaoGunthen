import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePiuService from '@modules/pius/services/CreatePiuService';
import ListPiuService from '@modules/pius/services/ListPiuService';
import DeletePiuService from '@modules/pius/services/DeletePiuService';
import UpdatePiuService from '@modules/pius/services/UpdatePiuService';
import GetPiuService from '@modules/pius/services/GetPiuService';

export default class PiusController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { userId, texto } = req.body;

    const createPiu = container.resolve(CreatePiuService);

    const piu = await createPiu.execute({
      userId,
      texto,
    });

    return res.status(201).json(piu);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const pius = await container.resolve(ListPiuService).execute();

    return res.status(200).json(pius);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletePiu = container.resolve(DeletePiuService);
    const getPiu = container.resolve(GetPiuService);

    const piu = await getPiu.execute(id);

    if (!piu) {
      return res.status(404).json({ message: 'Piu not found' });
    }

    await deletePiu.execute(id);

    return res.status(200).json({
      message: 'Piu deleted',
      deletedPiu: piu,
    });
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { texto } = req.body;

    const updatePiu = container.resolve(UpdatePiuService);

    await updatePiu.execute({
      id,
      texto,
    });

    return res.status(200).json({ message: 'Piu updated' });
  }
}
