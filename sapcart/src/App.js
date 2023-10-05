import Navbar from "./pages/navbar";
import JumboTron from "./pages/jumboTron";
import CartPages from "./pages/cartpages";
import { Container } from "@chakra-ui/react";
import CartContainer from "./pages/cart-container";
function App() {
  return (
    <Container maxW="100vw" padding="0">
      <Navbar />
      <JumboTron />
      <CartContainer />
      <CartPages />
    </Container>
  );
}

export default App;
