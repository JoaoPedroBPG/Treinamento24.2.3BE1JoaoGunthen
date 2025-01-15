import { inject, injectable } from 'tsyringe';
import { Users } from '@prisma/client';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
export default class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(id: string): Promise<Users> {
    const user = await this.usersRepository.findById(id);

    if (!user) throw new Error('User not found');

    await this.usersRepository.delete(id);

    return user;
  }
}
