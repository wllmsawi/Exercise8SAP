import { Link } from "react-router-dom";
import Navbar from "./navbar";
import JumboTron from "./jumboTron";
import CartContainer from "./cart-container/index";

function Home() {
  return (
    <>
      <Navbar />
      <JumboTron />
      <CartContainer/>
    </>
  );
}

export default Home;
