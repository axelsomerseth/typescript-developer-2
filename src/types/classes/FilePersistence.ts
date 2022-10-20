import { InvoicePersistence } from "../interfaces/InvoicePersistence";
import { Invoice } from "./Invoice";
import os from "os";

class FilePersistence implements InvoicePersistence {
  static getOSPlatform(): string {
    // returns the Operative System's name;
    return os.platform() || "";
  }
  save(invoice: Invoice) {
    // Save to file
  }
}

export { FilePersistence };
