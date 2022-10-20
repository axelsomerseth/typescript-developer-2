import { Category } from "./Category";

class SubCategory extends Category {
  parentCategoryId: number;
  constructor(
    name: string,
    description: string,
    parentCategoryId: number,
    id?: number
  ) {
    super(name, description, id);
    this.parentCategoryId = parentCategoryId;
  }
}

export { SubCategory };
