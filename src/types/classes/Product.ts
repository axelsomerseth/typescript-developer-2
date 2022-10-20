import { Base } from "./Base";

class Product extends Base {
  id?: number;
  name: string;
  description: string;
  categoryId?: number;
  price: number;
  stock: number;

  constructor(
    name: string,
    description: string,
    price: number,
    stock: number,
    categoryId?: number,
    id?: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.categoryId = categoryId;
    this.id = id;
  }
}

export { Product };
