import { Link, useParams } from "react-router-dom"
import { Text, Box,HStack } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const {id} = useParams();
    const url: string = 'http://localhost:3000/products/'+id;
    const {data:product, error, loading} = useFetch(url);

    console.log(product);
  return (
    <Box>
        <Text>ID do produto: {id}</Text>
        {error && <Text>Ocorreu um erro</Text>}
        {loading && <Text>Carregando ...</Text>}
        {product && 
        <HStack>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </HStack>
        }
    </Box>
  )
}

export default Product