import { InvoicePersistence } from "../interfaces/InvoicePersistence";
import { Invoice } from "./Invoice";

class FilePersistence implements InvoicePersistence {
  save(invoice: Invoice) {
    // Save to file
  }
}

export { FilePersistence };
