import Navbar from "./pages/navbar";
import JumboTron from "./pages/jumboTron";
import CartPages from "./pages/cartpages";
import { Container } from "@chakra-ui/react";
import CartContainer from "./pages/cart-container";
import TestingCart from "./pages/testingCart";
function App() {
  return (
    <Container maxW="100vw" padding="0">
      <Navbar />
      <JumboTron />
      <CartContainer />
      <CartPages />
      <TestingCart />
    </Container>
  );
}

export default App;
