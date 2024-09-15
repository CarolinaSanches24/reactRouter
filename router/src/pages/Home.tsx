import { useFetch } from "../hooks/useFetch";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  CardFooter,
  SimpleGrid,
  Box,
  Image
} from "@chakra-ui/react";

import {Link} from 'react-router-dom';
import { ProductDTO } from "../entity/product";
import { getImageUrl } from "../utils/getImage";


const Home = () => {
  const url: string = "http://localhost:3000/products";
  const { data: items, error } = useFetch<ProductDTO>(url);

  return (
    <Box marginTop="15vh">
      {error && <p>{error}</p>}
      <SimpleGrid columns={[1, 2, 3]} spacing="4" width="180vh" height="50vh">
        {items &&
          items.map((item) => (
            <Card key={item.id} textAlign="center">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
                <Image   boxSize="300px" objectFit="contain" src={getImageUrl(item.imageSrc)}/>
              </CardHeader>
              <CardBody>
                <Text>{item.price}</Text>
                <Link to={`/products/${item.id}`}>Detalhes</Link>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;