import { Base } from "./types/classes/Base";
import { Category } from "./types/classes/Category";
import { Product } from "./types/classes/Product";
import { SubCategory } from "./types/classes/SubCategory";
import {
  Movement,
  Transaction,
  TransactionTypes,
} from "./types/classes/Transaction";
import { FilePersistence } from "./types/classes/FilePersistence";
import { Buyer } from "./types/interfaces/Buyer";

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

// TODO: initialize Invoice
// TODO: initialize InvoicePrinter
// TODO: initialize InvoiceEmailSender

// * Type Casting or Type assertion
let code: any = 123;
let productCode = <number>code;
console.log("Product code type: ", typeof productCode);

// * Static members
console.log("Static members: ", FilePersistence.getOSPlatform());

// * Abstact class
// let base = new Base(); // ! Uncomment to see: Cannot create an instance of an abstract class

// * Interface initialization
const firstCustomer: Buyer = {
  firstName: "John",
  lastName: "Doer",
  email: "jonh.doer+test@test.com",
};

const logBuyer = (description: string, b: Buyer) => {
  console.log(description, b);
};

logBuyer("Buyer Interface initialization: ", firstCustomer);

// * Duck typing (structural typing)
logBuyer("Duck typing: ", {
  firstName: "José",
  lastName: "Hacedor",
  email: "jose.hacedor+test@test.com",
});

// * Excess Property Checks
logBuyer("Excess Property Checks: ", {
  firstName: "Phil",
  lastName: "Faker",
  phone: "+1 (216) 513-9999",
} as Buyer);
