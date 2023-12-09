import { Model, HandlerTypes } from "axe-api";

class Order extends Model {
  get fillable() {
    return ["book_id", "user_id", "quantity", "status"];
  }

  get validations() {
    return {
      book_id: "required|numeric",
      user_id: "required|numeric",
      quantity: "required|numeric|min:1",
      status: "required|in:ordered,approved,shipped,delivered",
    };
  }

  get transaction() {
    return [
      {
        handlers: [HandlerTypes.INSERT],
        transaction: true,
      },
    ];
  }

  book() {
    return this.hasOne("Book", "id", "book_id");
  }

  user() {
    return this.hasOne("User", "id", "user_id");
  }

  transactions() {
    return this.hasMany("OrderTransaction", "id", "order_id");
  }
}

export default Order;
