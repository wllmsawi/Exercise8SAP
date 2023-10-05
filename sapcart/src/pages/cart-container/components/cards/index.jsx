import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { BsFillCartPlusFill } from "react-icons/bs";

import img1 from "../../image/1.jpg";

function Card() {

  return (
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
  );
}

export default Card;
