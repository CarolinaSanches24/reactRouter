import { Link } from "react-router-dom";
import { Box, HStack, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box as="nav" bg="rgba(0, 0, 0, 0.87)" padding="1.5rem" width="100%">
      <HStack spacing="2rem" justifyContent="right" marginEnd="80vh">
        <Text as= {Link} to="/" color="#FFF">Home</Text>
        <Text as= {Link} to="/about" color="#FFF">About</Text>
      </HStack>    
    </Box>
  );
};

export default NavBar;