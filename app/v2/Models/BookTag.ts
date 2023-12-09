import { Model } from "axe-api";

class BookTag extends Model {
  get fillable() {
    return ["book_id", "tag_id"];
  }

  get validations() {
    return {
      book_id: "required|numeric",
      tag_id: "required|numeric",
    };
  }

  get createdAtColumn() {
    return null;
  }

  get updatedAtColumn() {
    return null;
  }

  tag() {
    return this.hasOne("Tag", "id", "tag_id");
  }
}

export default BookTag;
