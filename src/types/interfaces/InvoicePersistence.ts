import { Invoice } from "../classes/Invoice";

interface InvoicePersistence {
  // * Interface having Optional Property
  // With orthogonal persistence, a program doesn’t need to persist its state in files explicitly:
  // the runtime handles persistence transparently.
  isOrthogonal?: boolean;
  save(invoice: Invoice): void;
}

export { InvoicePersistence };
