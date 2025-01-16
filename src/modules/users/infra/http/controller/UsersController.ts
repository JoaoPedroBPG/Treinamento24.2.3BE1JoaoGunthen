import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ListUserService from '@modules/users/services/ListUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';
import LoginUserService from '@modules/users/services/LoginUserService';

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      cpf,
      phone,
      password,
    } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      cpf,
      phone,
      password,
    });

    user.password = '###';

    return res.status(201).json(user);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const users = await container.resolve(ListUserService).execute();

    return res.status(200).json(users);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUser = container.resolve(DeleteUserService);

    await deleteUser.execute(id);

    return res.status(200).json({ message: 'User deleted' });
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const loginUser = container.resolve(LoginUserService);

    const user = await loginUser.execute({ email, password });

    return res.status(200).json(user);
  }
}
