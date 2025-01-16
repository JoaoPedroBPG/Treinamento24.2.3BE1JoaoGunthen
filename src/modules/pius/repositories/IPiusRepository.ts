import { Pius } from '@prisma/client';

import ICreatePiuDTO from '../dtos/ICreatePiuDTO';
import IUpdatePiuDTO from '../dtos/IUpdatePiuDTO';

interface IPiusRepository {
  findById(id: string): Promise<Pius | null>;
  delete(id: string): Promise<void>;
  create(data: ICreatePiuDTO): Promise<Pius>;
  findAll(): Promise<Pius[]>;
  update(id: string, data: IUpdatePiuDTO): Promise<Pius>;
}

export default IPiusRepository;
