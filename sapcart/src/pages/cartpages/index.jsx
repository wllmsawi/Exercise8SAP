import { Box, Container } from "@chakra-ui/react";

function CartPages() {
  return (
    <Container
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      bg="grey"
      p="0 1.5em"
    >
      <Box bg="red" w="100%" p="0">
        <h1>Keranjang</h1>
      </Box>
    </Container>
  );
}

export default CartPages;
