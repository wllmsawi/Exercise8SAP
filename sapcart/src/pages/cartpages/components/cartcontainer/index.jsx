import {
  Checkbox,
  Box,
  VStack,
  Text,
  HStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
function CartContainer(props) {
  return (
    <>
      <Box
        justifyContent="flex-start"
        p=".5em 0"
        borderTop="2px solid lightGray"
        borderBottom="2px solid lightGray"
        w="70%"
      >
        <VStack spacing=".5em" align="stretch">
          <Box className="storeName" display="flex" alignItems="center">
            <HStack>
              <Checkbox></Checkbox>
              <VStack spacing="0" align="flex-start">
                <Text as="b">{props.storeName}</Text>
                <Text fontSize="xs">{props.storeLoc}</Text>
              </VStack>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Checkbox></Checkbox>
              <Box
                w="7.5em"
                h="7.5em"
                borderRadius="0.5em"
                bgColor="lightGray"
              ></Box>
              <VStack spacing="0" align="flex-start">
                <Text as="b">{props.itemName}</Text>
                <Text fontSize="sm">{props.itemPrice}</Text>
              </VStack>
            </HStack>
          </Box>
          <Box>
            <Flex alignItems="center">
              <Box p="0 .5em">
                <Text fontSize="xs">Tulis catatan</Text>
              </Box>
              <Spacer />
              <Box p="0 .5em">
                <Box>
                  <HStack>
                    <Text
                      fontSize="xs"
                      borderRight="1px solid black"
                      p="0 .5em"
                    >
                      Pindah ke wishlist
                    </Text>
                    <BiTrash />
                  </HStack>
                </Box>
              </Box>
              <Box p="0 .5em">
                <HStack>
                  <AiFillMinusCircle />
                  <Text>{props.itemQuantity}</Text>
                  <AiFillPlusCircle />
                </HStack>
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default CartContainer;
