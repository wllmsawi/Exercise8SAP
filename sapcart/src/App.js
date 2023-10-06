import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import CartPages from "./pages/cartpages/index.jsx";

function App() {
  return (
    <Container maxW="100vw" padding="0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Checkout" element={<CartPages />} />
      </Routes>
    </Container>
  );
}

export default App;
