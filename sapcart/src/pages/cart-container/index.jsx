import { Box, Text, VStack, Image, HStack, Heading } from "@chakra-ui/react";
import img1 from "../../pages/cart-container/image/1.jpg";
import Card from "./components/cards";
import { BsFillCartPlusFill } from "react-icons/bs";
function CartContainer() {
  return (
    <Box h="auto" w="full" p="2.5em 1.5em" backgroundColor={"lightgray"}>
      <Box backgroundColor="red" p="2.5em 1.5em">
        <VStack>
          <Box>
            <Heading>Daftar Item</Heading>
          </Box>
          <Box>
            <HStack spacing="24px">
              <Card />
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default CartContainer;
