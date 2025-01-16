import { inject, injectable } from 'tsyringe';
import { Pius } from '@prisma/client';
import IPiusRepository from '../repositories/IPiusRepository';

interface IRequest {
  userId: string;
  texto: string;
}

@injectable()
export default class CreatePiuService {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
  ) {}

  public async execute({ userId, texto }: IRequest): Promise<Pius> {
    const piu = await this.piusRepository.create({
      userId,
      texto,
    });

    return piu;
  }
}
