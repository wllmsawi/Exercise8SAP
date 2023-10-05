import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { BsFillCartPlusFill } from "react-icons/bs";

function Card(props) {
  return (
    <Box>
      <HStack spacing="24px">
        <Box
          borderRadius="1em"
          w="240px"
          h="320px"
          p="2.5em 1.5em"
          bg="lightgray"
        >
          <Box borderRadius="0.5em" overflow="hidden">
            <Image src={props.img} objectFit="cover" w="100%" h="160px" />
          </Box>
          <VStack fontSize="sm" align="flex-end" spacing="0">
            <Text>{props.itemName}</Text>
            <Text>{props.itemPrice}</Text>
            <BsFillCartPlusFill />
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}

export default Card;
