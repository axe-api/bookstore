import bcrypt from "bcrypt";
import { IHookParameter } from "axe-api";
import { UserStatus } from "../../Enum";

export default async ({ formData }: IHookParameter) => {
  formData.password = bcrypt.hashSync(
    formData.password,
    process.env.APP_SECRET as string
  );
  formData.user_status = UserStatus.Standart;
};
