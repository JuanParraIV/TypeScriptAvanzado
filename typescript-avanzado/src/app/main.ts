import { faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from './products/product.services'


for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    description: faker.commerce.productDescription(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S' ,'M' ,'L' ,'XL']),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products)

const product = products[0];

updateProduct(product.id, {
title:'New Title',
stock:80,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['tag1', 'tag2', 'tag3'],
})
