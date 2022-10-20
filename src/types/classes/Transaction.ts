import { Base } from "./Base";

enum Movement {
  Invalid,
  In,
  Out,
}

enum TransactionTypes {
  // Inbound and outbound transactions
  Invalid = "Invalid",
  Adjustments = "Adjustments",
  Transfers = "Transfers",

  // Only Inbound transactions
  Receipts = "Receipts",
  Returns = "Returns",
  ItemsAddedThroughCycleCounts = "ItemsAddedThroughCycleCounts",

  // Only Outbound transactions
  Selling = "Selling",
  Issues = "Issues",
  ItemsRemovedThroughCycleCounts = "ItemsRemovedThroughCycleCounts",
}

class Transaction extends Base {
  id?: number;
  productId?: number;
  movement: Movement;
  quantity: number;
  type: TransactionTypes;
  description: string;

  constructor(
    movement: Movement,
    quantity: number,
    type: TransactionTypes,
    description: string,
    id?: number,
    productId?: number
  ) {
    super();
    this.movement = movement;
    this.quantity = quantity;
    this.type = type;
    this.description = description;
    this.id = id;
    this.productId = productId;
  }
}

export { Transaction, Movement, TransactionTypes };
