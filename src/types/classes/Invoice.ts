import { Base } from "./Base";
import { Product } from "./Product";

class Invoice extends Base {
  products: Product[];
  subtotal: number;
  discountRate: number;
  taxRate: number;
  total: number;

  constructor() {
    super();
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
