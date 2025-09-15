import { PRODUCTS_BASE_URL } from "../../constants/endpoints";
import { IHttp } from "../../interface/http.interface";
import { IProductService } from "../../interface/productService.interface";
import { Product } from "../../types/product";

const ProductService = (http: IHttp): IProductService => {
  return {
    fetchProducts: async () => {
      try {
        const response = await http.get<{products: Product[]}>(PRODUCTS_BASE_URL)
        return response.products
      } catch (error) {
        throw new Error("Erro na busca dos Produtos")
      }
    }
  }
}


export default ProductService;