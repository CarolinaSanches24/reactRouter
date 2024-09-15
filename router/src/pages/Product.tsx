import { Link, useParams } from "react-router-dom";
import { Text, Box, HStack, Image, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { ProductDTO } from "../entity/product";
import { getImageUrl } from "../utils/getImage";

const Product = () => {
  const { id } = useParams<{ id: string }>(); 
  const url: string = `http://localhost:3000/products/${id}`;
  const { data: product, error, loading } = useFetch<ProductDTO>(url);

  return (
    <Box marginTop="15vh" padding="4">
      <Text>ID do produto: {id}</Text>
      {error && <Text>Ocorreu um erro: {error}</Text>}
      {loading && <Text>Carregando ...</Text>}
      {product && (
        <HStack spacing="4">
    
          <Image 
            src={getImageUrl(product.imageSrc)} 
            alt={product.name} 
            boxSize="300px" 
            objectFit="contain"
          />
          <Card>
            <CardHeader>
              <Heading size="md">{product.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>Preço: ${product.price}</Text>
              <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </CardBody>
          </Card>
        </HStack>
      )}
    </Box>
  );
}

export default Product;
