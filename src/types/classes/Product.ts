class Product {
  id?: number;
  name: string;
  description: string;
  categoryId?: number;
  price: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(
    name: string,
    description: string,
    price: number,
    stock: number,
    categoryId?: number,
    id?: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.categoryId = categoryId;
    this.id = id;
    this.createdAt = new Date();
  }
}

export { Product };
