import { InvoicePersistence } from "../interfaces/InvoicePersistence";
import { Invoice } from "./Invoice";

class DatabasePersistence implements InvoicePersistence {
  save(invoice: Invoice) {
    // Save to DB
  }
}

export { DatabasePersistence };
