class Category {
  id?: number;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor() {
    this.name = "";
  }
}

export { Category };
