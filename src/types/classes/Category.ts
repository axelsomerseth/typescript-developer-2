import { Base } from "./Base";

class Category extends Base {
  id?: number;
  name: string;
  description?: string;

  constructor(name: string, description?: string, id?: number) {
    super();
    this.name = name;
    this.description = description;
    this.id = id;
  }
}

export { Category };
