import { Category } from "./types/classes/Category";
import { FilePersistence } from "./types/classes/FilePersistence";
import { Product } from "./types/classes/Product";
import { SubCategory } from "./types/classes/SubCategory";
import {
  Movement,
  Transaction,
  TransactionTypes,
} from "./types/classes/Transaction";

// * Categories
const category = new Category("Meat", "Meat description", 1);
console.log("Category: ", category);

// * Categories
const subCategory = new SubCategory(
  "Beef",
  "Beef meat",
  category.id as number,
  1
);
console.log("SubCategory: ", subCategory);

// * Products
const product = new Product(
  "Strip steak",
  "Beef strip steak",
  category.id as number,
  100,
  5,
  1
);
console.log("Product: ", product);

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
console.log("First transaction: ", firstTransaction);
console.log("Second transaction: ", secondTransaction);

// ! Type Casting or Type assertion
let code: any = 123;
let productCode = <number>code;
console.log("Product code type: ", typeof productCode);

// * Static members
console.log("Static members: ", FilePersistence.getOSPlatform());
