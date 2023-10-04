import { Box, Text, Heading } from "@chakra-ui/react";
import CartContainer from "./components/cartcontainer";

function CartPages() {
  return (
    <Box display="flex" flexDir="column" minH="100vh">
      <Box
        bg="grey"
        p="1em 2.5em"
        display="flex"
        alignItems="center"
        flexDir="flex-start"
      >
        <Box>
          <Heading as="h1">Keranjang</Heading>
        </Box>
      </Box>
      <Box h="auto" p="1em 2.5em">
        <CartContainer />
      </Box>
    </Box>
  );
}

export default CartPages;
