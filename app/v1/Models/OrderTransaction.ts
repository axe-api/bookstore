import { Model } from "axe-api";

class OrderTransaction extends Model {
  get fillable() {
    return ["order_id", "transaction_type", "description"];
  }

  get validations() {
    return {
      order_id: "required|numeric",
      transaction_type: "required|max:1|max:50",
    };
  }
}

export default OrderTransaction;
