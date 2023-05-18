import { BaseDatabase } from "./BaseDatabase";

export class UsersDatabase extends BaseDatabase {
  public getUsers = async () => {
    const users = await BaseDatabase.connection("users");

    return users;
  };

  public createUser = async (input: {
    id: string,
    name: string;
    email: string;
    password: string;
    role: string,
  }) => {
    await BaseDatabase.connection("users").insert(input);
  };
}
