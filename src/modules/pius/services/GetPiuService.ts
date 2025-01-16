import { inject, injectable } from 'tsyringe';
import { Pius } from '@prisma/client';
import IPiusRepository from '../repositories/IPiusRepository';

@injectable()
export default class GetPiuService {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
  ) { }

  public async execute(id: string): Promise<Pius | null> {
    const piu = await this.piusRepository.findById(id);
    return piu;
  }
}
