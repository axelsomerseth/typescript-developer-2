class Category {
  id?: number;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(name: string, description?: string, id?: number) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.createdAt = new Date();
  }
}

export { Category };
