import { Base } from "./Base";
import { Invoice } from "./Invoice";

class InvoicePrinter extends Base {
  invoice: Invoice;

  constructor(invoice: Invoice) {
    super();
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
    // console.log(outcome);
    return outcome;
  }
}

export { InvoicePrinter };
