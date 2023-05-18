import { UsersDatabase } from "../database/UsersDatabase";

export class UsersBusiness {
  constructor(private usersDatabase: UsersDatabase) {}

  public getUsers = async () => {
    const users = await this.usersDatabase.getUsers();
    return users;
  };
  public createUser = async (input: {
    name: string;
    email: string;
    password: string;
  }) => {

    const inputDB = {
        id: new Date().toISOString(),
        name: input.name,
        email: input.email,
        password: input.password,
        role: 'NORMAL'
    }
    await this.usersDatabase.createUser(inputDB)
    return ({
        message: "usuário criado com sucesso."
      })
  };
}
