import { faker } from '@faker-js/faker';
import { Product } from "./product.model";
import { CreateProductDto,FindProductDto,UpdateProductDto } from "./product.dto";

export const products : Product[] = [];

export const addProduct  = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct)
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const product = products.find(p => p.id === id);
  if (!product) {
    throw new Error('Product not found');
  }
  const updatedProduct = {
    ...product,
    ...changes,
    updatedAt: faker.date.recent(),
  }
  return updatedProduct;
}

export const findProducts = (dto: FindProductDto): Product[] => {
  dto.tags = [];
  dto.tags?.push();
  return products
}
