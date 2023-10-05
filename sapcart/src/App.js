import Navbar from "./pages/navbar";
import JumboTron from "./pages/jumboTron";
import CartPages from "./pages/cartpages";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <Container maxW="100vw" padding="0">
      <Navbar />
      <JumboTron />
      <CartPages />
    </Container>
  );
}

export default App;
