import prisma from '@shared/infra/prisma/client';
import { Pius, Prisma } from '@prisma/client';

import IPiusRepository from '@modules/pius/repositories/IPiusRepository';
import ICreatePiuDTO from '@modules/pius/dtos/ICreatePiu';

export default class PiusRepository implements IPiusRepository {
  private ormRepository: Prisma.PiusDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>

  constructor() {
    this.ormRepository = prisma.pius;
  }

  public async create(data: ICreatePiuDTO): Promise<Pius> {
    const piu = await this.ormRepository.create({ data });

    return piu;
  }

  public async findAll(): Promise<Pius[]> {
    const pius = await this.ormRepository.findMany();

    return pius;
  }

  public async findById(id: string): Promise<Pius | null> {
    const piu = await this.ormRepository.findUnique({
      where: { id },
    });

    return piu;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({
      where: { id },
    });
  }
}
