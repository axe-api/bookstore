import bcrypt from "bcrypt";
import { IContext } from "axe-api";
import { UserStatus } from "../../Enum";

export default async ({ formData, database, res }: IContext) => {
  const { username, email } = formData;

  const user = await database
    .table("users")
    .where("username", username)
    .orWhere("email", email)
    .first();

  if (user) {
    return res.status(400).json({
      error: "The provided username or email is already in use.",
    });
  }

  formData.password = bcrypt.hashSync(formData.password, 10);
  formData.user_status = UserStatus.Standart;
};
