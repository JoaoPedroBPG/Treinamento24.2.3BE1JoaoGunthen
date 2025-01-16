import { inject, injectable } from 'tsyringe';
import { Pius } from '@prisma/client';
import IPiusRepository from '../repositories/IPiusRepository';

@injectable()
export default class DeletePiuService {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
  ) { }

  public async execute(id: string): Promise<Pius> {
    const piu = await this.piusRepository.findById(id);

    if (!piu) throw new Error('User not found');

    await this.piusRepository.delete(id);

    return piu;
  }
}
