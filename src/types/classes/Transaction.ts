enum Movement {
  Invalid,
  In,
  Out,
}

enum TransactionTypes {
  // Inbound and outbound transactions
  Invalid,
  Adjustments,
  Transfers,

  // Only Inbound transactions
  Receipts,
  Returns,
  ItemsAddedThroughCycleCounts,

  // Only Outbound transactions
  Selling,
  Issues,
  ItemsRemovedThroughCycleCounts,
}

class Transaction {
  id?: number;
  productId?: number;
  movement: Movement;
  quantity: number;
  type: TransactionTypes;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(
    movement: Movement,
    quantity: number,
    type: TransactionTypes,
    description: string,
    id?: number,
    productId?: number
  ) {
    this.movement = movement;
    this.quantity = quantity;
    this.type = type;
    this.description = description;
    this.id = id;
    this.productId = productId;
  }
}

export { Transaction, Movement, TransactionTypes };
