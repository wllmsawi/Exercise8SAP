import { Box, Text } from "@chakra-ui/react";

function CartPages() {
  return (
    <Box display="flex" flexDir="column" minH="100vh">
      <Box bg="grey" p="2.5em 1.5em" display="flex" flexDir="flex-start">
        <Box>
          <Text as="h1">Keranjang</Text>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default CartPages;
