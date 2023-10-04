import { Checkbox, Box, VStack, Text, HStack, Flex } from "@chakra-ui/react";
function CartContainer() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="flex-start"
        p=".5em 0"
        borderTop="1px solid black"
        borderBottom="1px solid black"
        w="70%"
      >
        <VStack spacing=".5em">
          <Box className="itemContainer">
            <Box className="storeName" display="flex" alignItems="center">
              <Box>
                <HStack>
                  <Checkbox></Checkbox>
                  <VStack spacing="0" align="flex-start">
                    <Text as="b">Toko Madura</Text>
                    <Text fontSize="xs">Seturan</Text>
                  </VStack>
                </HStack>
              </Box>
            </Box>
            <Box>
              <HStack>
                <Checkbox></Checkbox>
                <VStack spacing="0" align="flex-start">
                  <Text>Pop Mie Mas Michael</Text>
                  <Text>Rp 10.000,00</Text>
                </VStack>
              </HStack>
              <Flex>
                <Text fontSize="xs">Tulis catatan</Text>
                <Box>
                  <Text fontSize="xs">Pindah ke wishlist</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default CartContainer;
