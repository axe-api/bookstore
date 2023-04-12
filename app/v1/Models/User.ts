import { Model } from "axe-api";

class User extends Model {
  get fillable() {
    return [
      "username",
      "first_name",
      "last_name",
      "email",
      "password",
      "phone",
    ];
  }

  get validations() {
    return {
      username: "required|min:3|max:50",
      first_name: "required|min:2|max:50",
      last_name: "required|min:2|max:50",
      email: "required|min:3|max:255|email",
      password: "required|min:6|max:100",
    };
  }

  get hiddens() {
    return ["email", "password"];
  }
}

export default User;
