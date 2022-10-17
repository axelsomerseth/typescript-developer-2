class Product {
  id?: number;
  name: string;
  description: string;
  categoryId: number;
  price: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor() {
    this.name = "";
    this.description = "";
    this.categoryId = 0;
    this.price = 0;
    this.stock = 0;
  }
}

export { Product };
