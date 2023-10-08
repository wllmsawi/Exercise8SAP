import { Box, Heading, VStack } from "@chakra-ui/react";
import CartContainer from "./components/cartcontainer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { removeFromCart } from "../../store/reducers/Counter";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

function CartPages() {
  const allItems = useSelector((state) => state.counter.item);
  const dispatch = useDispatch();
  let cart = allItems.map((data) => {
    return (
      <CartContainer
        storeName={data.storeName}
        storeLoc={data.storeLoc}
        itemName={data.itemName}
        itemPrice={data.itemPrice}
        img={data.img}
        onClick={() => dispatch(removeFromCart(data["key"]))}
      />
    );
  });
  console.log({ cart });
  return (
    <Box display="flex" flexDir="column" minH="100vh">
      <Box
        bg="lightGray"
        p="1em 2.5em"
        display="flex"
        alignItems="center"
        flexDir="flex-start"
        justifyContent={"space-between"}
      >
        <Box>
          <Heading as="h1" fontSize="2xl">
            KERANJANG
          </Heading>
        </Box>
        <Box>
          <Link to={"/"}>
            <AiFillHome fontSize={"1.5em"} />
          </Link>
        </Box>
      </Box>
      <Box h="auto" p="1em 2.5em">
        <VStack align="stretch" spacing="2.5em">
          {cart}
        </VStack>
      </Box>
    </Box>
  );
}

export default CartPages;
