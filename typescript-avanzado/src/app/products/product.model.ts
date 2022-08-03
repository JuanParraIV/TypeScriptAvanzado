import { BaseModel } from './../base.model';
import { Category } from "../categories/category.model";


export type TshirtSize = 'S' | 'M' | 'L' | 'XL';


export interface Product extends BaseModel{
  title: string;
  image: string;
  description: string;
  price: number;
  stock: number;
  size?: TshirtSize;
  color: string;
  category: Category;
  isNew: boolean;
  tags: string[];
}




