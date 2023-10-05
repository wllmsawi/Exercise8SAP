import { Box, Text, VStack, Image, HStack, Heading } from "@chakra-ui/react";
import img1 from "../../pages/cart-container/image/1.jpg";
import { BsFillCartPlusFill } from "react-icons/bs";
function CartContainer() {
  return (
    <Box p="2.5em 1.5em" backgroundColor={"lightgray"}>
      <Box p="2.5em 1.5em">
        <VStack>
          <Box p="1.5em 2.5em">
            <Heading>Daftar Item</Heading>
          </Box>
          <Box>
            <HStack spacing="24px">
              <Box
                borderRadius="1em"
                w="240px"
                h="320px"
                p="2.5em 1.5em"
                bg="blue.200"
              >
                <Box borderRadius="0.5em" overflow="hidden">
                  <Image src={img1} />
                </Box>
                <VStack fontSize="sm" align="flex-end" spacing="0">
                  <Text>Celana</Text>
                  <Text>Rp 150.000,00-</Text>
                  <BsFillCartPlusFill />
                </VStack>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default CartContainer;
