import { CATEGORIES_BASE_URL} from "../../constants/endpoints";
import { IHttp } from "../../interface/http.interface";
import { ICategoryService } from "../../interface/categoryService.interface";
import { Category } from "../../types/category";



const CategoryService = (http: IHttp): ICategoryService =>{
  return{
    fetchCategory: async () => {
      try {
        const response = await http.get<{categories: Category[]}>(CATEGORIES_BASE_URL)

        return response.categories
      } catch (error) {
        throw new Error("Erro na busca das Categorias")
      }
    }
  }
}

export default CategoryService