import React from "react";
import { Box, Image } from "@chakra-ui/react";
import jumbo from "./img/jumbo1.png";
function JumboTron() {
  return (
    <Box p="1em 1.5em" borderRadius="1em" overflow="hidden" paddingTop={"2em"}>
      <Image
        src={jumbo}
        w={"full"}
        h={"40vh"}
        border="5px solid lightgray"
        borderRadius=".5em"
      />
    </Box>
  );
}

export default JumboTron;
