import { Link, useParams } from "react-router-dom"
import { Text, Box,HStack } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { ProductDTO } from "../entity/product";


const Product = () => {
    const { id } = useParams<{ id: string }>(); 
    const url: string = `http://localhost:3000/products/${id}`;
    const { data: product, error, loading } = useFetch<ProductDTO>(url);

    console.log(product);
  return (
    <Box>
      <Text>ID do produto: {id}</Text>
      {error && <Text>Ocorreu um erro: {error}</Text>}
      {loading && <Text>Carregando ...</Text>}
      {product && (
        <HStack>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </HStack>
      )}
    </Box>
  )
}

export default Product