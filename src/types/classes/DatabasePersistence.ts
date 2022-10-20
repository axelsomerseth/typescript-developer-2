import { InvoicePersistence } from "../interfaces/InvoicePersistence";
import { Invoice } from "./Invoice";

// * Interface Implementation by class
class DatabasePersistence implements InvoicePersistence {
  save(invoice: Invoice) {
    // Save to DB
  }
}

export { DatabasePersistence };
