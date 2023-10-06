import React from "react";
import { Box, Image } from "@chakra-ui/react";
import jumbo from "./img/jumbo1.png";
function JumboTron() {
  return (
    <Box p="2.5em 1.5em" borderRadius="1em" overflow="hidden">
      <Image
        src={jumbo}
        w="100%"
        h="306px"
        border="5px solid lightgray"
        borderRadius="1em"
      />
    </Box>
  );
}

export default JumboTron;