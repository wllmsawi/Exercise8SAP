import { Box, HStack, IconButton, Image, VStack, Text } from "@chakra-ui/react";
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
          <Box overflow="hidden">
            <Image
            borderRadius={"0.5em"}
              border="solid 0.2em grey"
              src={props.img}
              objectFit="cover"
              w="100%"
              h="160px"
            />
          </Box>
          <VStack fontSize="sm" align="flex-end" spacing="0">
            <Text right="20px" as="b">
              {props.itemName}
            </Text>
            <Text>{props.itemPrice}</Text>
            <IconButton
              top="1.5em"
              color="black"
              fontSize="1em"
              size="xs"
              bgColor="transparent"
              _hover={{ bg: "transparent" }}
              icon={<BsFillCartPlusFill />}
            />
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}

export default Card;
