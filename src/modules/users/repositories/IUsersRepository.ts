import { Users } from '@prisma/client';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

interface IUsersRepository {
  findById(id: string): Promise<Users | null>;
  delete(id: string): Promise<void>;
  findByEmailWithRelations(email: string): Promise<Users | null>;
  findByEmailPhoneOrCpf(email: string, phone: string, cpf: string): Promise<Users | null>;
  create(data: ICreateUserDTO): Promise<Users>;
  findAll(): Promise<Users[]>;
  update(id: string, data: IUpdateUserDTO): Promise<Users>;
}

export default IUsersRepository;
