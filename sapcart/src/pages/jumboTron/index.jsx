import React from "react";
import { Box, Image } from "@chakra-ui/react";
import jumbo from "./img/jumbo1.png";
function JumboTron() {
  return (
    <Box p={"1.5em 2.5em"} h={{ base: "80vw", md: "30vw" }} overflow={"hidden"}>
      <Image
        src={jumbo}
        boxSize={"full"}
        border="5px solid lightgray"
        borderRadius=".5em"
      />
    </Box>
  );
}

export default JumboTron;
