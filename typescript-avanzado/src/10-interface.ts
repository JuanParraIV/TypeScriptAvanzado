//Interfaces una mejor forma de definir objetos

type TshirtSize = 'S' | 'M' | 'L' | 'XL';
type ProductId= string | number;

interface Product  {
  id: ProductId ;
  title: string;
  createdAt: Date;
  stock:number;
  size?: TshirtSize;
}

const products : Product[] = [];

products.push({
  id:1,
  title: 'p1',
  createdAt: new Date(),
  stock:18,
  size: "S",
})

const addProduct = (data: Product) => products.push(data)

