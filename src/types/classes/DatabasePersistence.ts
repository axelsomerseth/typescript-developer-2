import { InvoicePersistence } from "../interfaces/InvoicePersistence";
import { DatabaseConnection } from "./DatabaseConnection";
import { Invoice } from "./Invoice";

// * Class extending another Class and also implementing an Interface
class DatabasePersistence
  extends DatabaseConnection
  implements InvoicePersistence
{
  save(invoice: Invoice) {
    // Save to DB
  }
  constructor(
    host: string,
    port: number,
    user: string,
    password: string,
    database: string
  ) {
    super(host, port, user, password, database);
  }
}

export { DatabasePersistence };
