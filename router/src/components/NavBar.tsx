import { NavLink, NavLinkProps } from "react-router-dom";
import { Box, HStack, Text, TextProps } from "@chakra-ui/react";

type StyledNavLinkProps = NavLinkProps & TextProps;

const StyledNavLink = (props:StyledNavLinkProps) => (
  <Text 
    as={NavLink} 
    color="#FFF" 
    _active={{
      fontWeight: "bold",
      transition: "all 0.5s ease-in-out",
      _after: {
        content: '""',
        display: "block",
        width: "100%",
        height: "2px",
        background: "#FFF",
        marginTop: "0.5rem",
      },
    }}
    {...props}
  />
);

const NavBar = () => {
  return (
    <Box as="nav" bg="rgba(0, 0, 0, 0.87)" padding="1.5rem" width="100%">
    <HStack spacing="2rem" justifyContent="right" marginEnd="80vh">
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
    </HStack>
  </Box>
  );
};

export default NavBar;