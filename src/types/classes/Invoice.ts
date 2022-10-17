import { Product } from "./Product";

class Invoice {
  products: Product[];
  subtotal: number;
  discountRate: number;
  taxRate: number;
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor() {
    this.products = [];
    this.subtotal = 0;
    this.discountRate = 0;
    this.taxRate = 0;
    this.total = this.calculateTotal();
  }

  calculateTotal(): number {
    let total: number = this.subtotal - this.discountRate + this.taxRate;
    return total;
  }
}

export { Invoice };
