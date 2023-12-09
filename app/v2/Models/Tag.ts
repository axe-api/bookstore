import { Model } from "axe-api";

class Tag extends Model {
  get fillable() {
    return ["name"];
  }

  get validations() {
    return {
      name: "required|max:100",
    };
  }
}

export default Tag;
