// * Abstact class
abstract class Base {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor() {
    this.createdAt = new Date();
  }
}

export { Base };
