enum Movement {
  Out,
  In,
  Invalid,
}

enum TransactionTypes {
  // Inbound transactions
  Receipts,
  Transfers,
  Adjustments,
  ItemsAddedThroughCycleCounts,
  Returns,

  // Outbound transactions
  Issues,
  ItemsRemovedThroughCycleCounts,
}

class Transaction {
  id?: number;
  productId: number;
  movement: Movement;
  quantity: number;
  type: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor() {
    this.productId = 0;
    this.movement = Movement.Invalid;
    this.quantity = 0;
    this.type = "Invalid";
    this.description = "";
  }
}

export { Transaction };
