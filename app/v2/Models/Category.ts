import { Model } from "axe-api";

class Category extends Model {
  get fillable() {
    return ["name"];
  }

  get validations() {
    return {
      name: "required|max:100",
    };
  }
}

export default Category;
