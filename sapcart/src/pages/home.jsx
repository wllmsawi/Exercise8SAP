import Navbar from "./navbar";
import JumboTron from "./jumboTron";
import CartContainer from "./cart-container/index";
import { Box, VStack } from "@chakra-ui/react";

function Home() {
  return (
    <Box w={"full"} overflow={"hidden"}>
      <Navbar />
      <JumboTron />
      <CartContainer />
    </Box>
  );
}

export default Home;
