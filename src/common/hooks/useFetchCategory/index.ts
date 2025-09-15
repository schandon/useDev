import { useState, useEffect } from 'react';
import { ICategoryService } from '../../interface/categoryService.interface';
import { Category } from '../../types/category';


const useFetchCategory = ( categoryService: ICategoryService)=> {
  const [ categories, setCategories ] = useState<Category[] | null>(null)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  useEffect(  ()=> { 
    const fetchCategory = async () => {
    try {  
      setIsLoading(true);
      const categoriesData = await categoryService.fetchCategory();
      setCategories(categoriesData)
      setIsLoading(false)
    } catch (error) {
      setError("Erro ao carregar categorias")
      setIsLoading(false)
    }
  }
    fetchCategory();
  },[categoryService] )

  return { categories, isLoading, error}
}

export default useFetchCategory