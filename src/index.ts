import { Category } from "./types/classes/Category";
import { Product } from "./types/classes/Product";
import {
  Movement,
  Transaction,
  TransactionTypes,
} from "./types/classes/Transaction";

// * Categories
const category = new Category("Meat", "Meat description", 1);
console.log(category);

// * Products
const product = new Product(
  "Strip steak",
  "Beef strip steak",
  category.id || 0, // TODO: remove this zero
  100,
  5,
  1
);
console.log(product);

// * Transactions
const firstTransaction = new Transaction(
  Movement.In,
  12,
  TransactionTypes.Receipts,
  "Provider sent 12 steaks",
  1,
  product.id
);
const secondTransaction = new Transaction(
  Movement.Out,
  6,
  TransactionTypes.Selling,
  "Client bought 6 steaks",
  2,
  product.id
);
console.log(firstTransaction);
console.log(secondTransaction);
