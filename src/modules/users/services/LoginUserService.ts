import { inject, injectable } from 'tsyringe';
import { Users } from '@prisma/client';
import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
export default class LoginUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ email, password }: { email: string, password: string }): Promise<Users> {
    const user = await this.usersRepository.findByEmailWithRelations(email);

    if (!user) {
      throw new AppError('Invalid email or password', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Invalid email or password', 401);
    }

    return user;
  }
}
