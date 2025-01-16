import { inject, injectable } from 'tsyringe';
import { Users } from '@prisma/client';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

interface IRequest extends IUpdateUserDTO {
  id: string;
}

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ id, ...data }: IRequest): Promise<Users> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }
    if (data.password) {
      // eslint-disable-next-line no-param-reassign
      data.password = await this.hashProvider.generateHash(data.password);
    }

    const updatedUser = await this.usersRepository.update(id, data);

    return updatedUser;
  }
}
