import { Box, Heading, VStack, } from "@chakra-ui/react";
import CartContainer from "./components/cartcontainer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { removeFromCart } from "../../store/reducers/Counter";
import { useDispatch } from "react-redux";
function CartPages() {
  const allItems = useSelector((state) => state.counter.item);
  const dispatch = useDispatch();
  let cart = allItems.map((data) => {
    return (
      <CartContainer
        storeName={data.storeName}
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
      >
        <Box>
          <Heading as="h1" fontSize="2xl">
            KERANJANG
          </Heading>
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
