import { Invoice } from "../classes/Invoice";

interface InvoicePersistence {
  save(invoice: Invoice): void;
}

export { InvoicePersistence };
