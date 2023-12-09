import { Model } from "axe-api";

class Book extends Model {
  get fillable() {
    return ["category_id", "name", "author", "price"];
  }

  get validations() {
    return {
      category_id: "required",
      name: "required|min:1|max:100",
      author: "required|min:3|max:100",
      price: "required|numeric",
    };
  }

  category() {
    return this.hasOne("Category", "id", "category_id");
  }

  tags() {
    return this.hasMany("BookTag", "id", "book_id");
  }
}

export default Book;
