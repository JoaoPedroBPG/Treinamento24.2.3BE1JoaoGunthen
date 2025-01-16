import { inject, injectable } from 'tsyringe';
import { Pius } from '@prisma/client';
import IPiusRepository from '../repositories/IPiusRepository';

@injectable()
export default class ListPiuService {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
  ) { }

  public async execute(): Promise<Pius[]> {
    return this.piusRepository.findAll();
  }
}
