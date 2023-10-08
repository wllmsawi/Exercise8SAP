import { Container, Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import CartPages from "./pages/cartpages/index.jsx";

function App() {
  return (
    <Box w={"full"} padding="0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Checkout" element={<CartPages />} />
      </Routes>
    </Box>
  );
}

export default App;
