import { inject, injectable } from 'tsyringe';
import { Pius } from '@prisma/client';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import IPiusRepository from '../repositories/IPiusRepository';
import IUpdatePiuDTO from '../dtos/IUpdatePiuDTO';

interface IRequest extends IUpdatePiuDTO {
  id: string;
}

@injectable()
export default class UpdatePiuService {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ id, ...data }: IRequest): Promise<Pius> {
    const piu = await this.piusRepository.findById(id);

    if (!piu) {
      throw new AppError('Piu not found');
    }

    const updatedPiu = await this.piusRepository.update(id, data);

    return updatedPiu;
  }
}
