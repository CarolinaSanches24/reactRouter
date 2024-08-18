import { useFetch } from "../hooks/useFetch";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";

import {Link} from 'react-router-dom';

const Home = () => {
  const url: string = "http://localhost:3000/products";
  const { data: items, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {/** Se tiver erro, imprima o erro */}
      {error && <p>{error}</p>}
      <SimpleGrid columns={[1, 2, 3]} spacing="4">
        {items &&
          items.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
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
    </div>
  );
};

export default Home;