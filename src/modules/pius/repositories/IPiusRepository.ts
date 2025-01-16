import { Pius } from '@prisma/client';

import ICreatePiuDTO from '../dtos/ICreatePiu';

interface IPiusRepository {
  findById(id: string): Promise<Pius | null>;
  delete(id: string): Promise<void>;
  create(data: ICreatePiuDTO): Promise<Pius>;
  findAll(): Promise<Pius[]>;
}

export default IPiusRepository;
