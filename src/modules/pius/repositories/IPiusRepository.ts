import { Pius } from '@prisma/client';

import ICreateUserDTO from '../dtos/ICreatePiu';

interface IPiusRepository {
  findById(id: string): Promise<Pius | null>;
  delete(id: string): Promise<void>;
  create(data: ICreateUserDTO): Promise<Pius>;
  findAll(): Promise<Pius[]>;
}

export default IPiusRepository;
