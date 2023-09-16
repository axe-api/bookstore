import bcrypt from "bcrypt";
import { IContext } from "axe-api";
import { UserStatus } from "../../Enum";

export default async ({ formData }: IContext) => {
  formData.password = bcrypt.hashSync(formData.password, 10);
  formData.user_status = UserStatus.Standart;
};
