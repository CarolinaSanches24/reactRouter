import { useSearchParams, Link } from "react-router-dom";
import { Box, Card, CardBody, CardFooter, CardHeader, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { ProductDTO } from "../entity/product";


export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); 
  const url: string = `http://localhost:3000/products${query ? `?q=${query}` : ''}`; 

  const { data: items, loading, error } = useFetch<ProductDTO[]>(url); 

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <HStack spacing={4}>
      <Text>Resultados disponíveis:</Text>
      <Box marginTop="15vh">
        <SimpleGrid columns={[1, 2, 3]} spacing="4" width="100%" height="auto">
          {items && items.map((item) => (
            <Card key={item.id} textAlign="center">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{item.price}</Text>
                <Link to={`/products/${item.id}`}>Detalhes</Link>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </HStack>
  );
};
