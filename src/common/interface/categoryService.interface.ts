import { Category } from "../types/category";


export interface ICategoryService{
  fetchCategory: () => Promise<Category[]>
}