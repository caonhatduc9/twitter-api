import User from "~/models/schemas/user.schema";
import databaseService from "./database.services";

class UsersService {
  register = async (payload: { email: string, password: string }) => {
    const { email, password } = payload;
    const result = await databaseService.users.insertOne(new User({ email, password }));
    return result;
  };
}
export default new UsersService();