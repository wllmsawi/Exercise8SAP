import {
  Checkbox,
  Box,
  VStack,
  Text,
  HStack,
  Flex,
  Spacer,
  Img,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

function CartContainer(props) {
  const [itemCounter, setItemCounter] = useState(1);
  const count = useSelector((state) => state.counter.value);
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
              <Img
                border=".5em solid lightGray"
                w="7.5em"
                h="7.5em"
                borderRadius="0.5em"
                bgColor="lightGray"
                src={props.img}
              />
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
                    <IconButton
                      size="xs"
                      color="black"
                      fontSize="1em"
                      icon={<BiTrash />}
                      bgColor="transparent"
                      _hover={{ bg: "transparent" }}
                      onClick={props.onClick}
                    />
                  </HStack>
                </Box>
              </Box>
              <Box>
                <HStack spacing=".5em">
                  <Box>
                    <IconButton
                      size="xs"
                      color="black"
                      fontSize="1em"
                      icon={<AiFillMinusCircle />}
                      onClick={() => setItemCounter(itemCounter - 1)}
                      bgColor="transparent"
                      _hover={{ bg: "transparent" }}
                    />
                  </Box>
                  <Box align="center">
                    <Text>{itemCounter}</Text>
                  </Box>
                  <Box>
                    <IconButton
                      size="xs"
                      color="black"
                      fontSize="1em"
                      icon={<AiFillPlusCircle />}
                      onClick={() => setItemCounter(itemCounter + 1)}
                      bgColor="transparent"
                      _hover={{ bg: "transparent" }}
                    />
                  </Box>
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
