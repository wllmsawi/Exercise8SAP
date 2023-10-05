import { Box, Text, Heading, VStack, HStack, Flex } from "@chakra-ui/react";
import CartContainer from "./components/cartcontainer";

function CartPages() {
  const dataItem = [
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Pop Mie Purwadhika",
      itemPrice: "Rp 5.000,00-",
      itemQuantity: 1,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Teh Kotak Purwadhika",
      itemPrice: "Rp 5.000,00-",
      itemQuantity: 1,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Susu Purwadhika",
      itemPrice: "Rp 5.000,00-",
      itemQuantity: 1,
    },
  ];
  let itemList = dataItem.map((data) => {
    return (
      <CartContainer
        storeName={data.storeName}
        storeLoc={data.storeLoc}
        itemName={data.itemName}
        itemPrice={data.itemPrice}
        itemQuantity={data.itemQuantity}
      />
    );
  });
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
          {itemList}
        </VStack>
      </Box>
    </Box>
  );
}

export default CartPages;
