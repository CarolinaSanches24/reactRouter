import { useParams } from "react-router-dom"
import { Text, Box } from "@chakra-ui/react";

const Product = () => {
    const {id} = useParams();
  return (
    <Box>
        <Text>ID do produto: {id}</Text>
    </Box>
  )
}

export default Product