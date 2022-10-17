import { Invoice } from "./Invoice";

class InvoicePrinter {
  invoice: Invoice;

  updatedAt?: Date;

  constructor(invoice: Invoice) {
    this.invoice = invoice;
  }

  print() {
    const outcome = `
		Products: ${this.invoice.products.map((p) => p.name)}
		--------------------------------------------------
		Subtotal: ${this.invoice.subtotal}
		Discount Rate: ${this.invoice.discountRate}
		Tax Rate: ${this.invoice.taxRate}
		--------------------------------------------------
		Total: ${this.invoice.total}
		`;
    console.log(outcome);
  }
}

export { InvoicePrinter };
