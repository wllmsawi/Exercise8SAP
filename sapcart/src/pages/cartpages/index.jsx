import { Box, Text, Heading, VStack, HStack, Flex } from "@chakra-ui/react";
import CartContainer from "./components/cartcontainer";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";
function CartPages() {
  const dataItem = [
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Celana",
      itemPrice: "Rp 100.000,00-",
      itemQuantity: 1,
      image: img1,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Baju",
      itemPrice: "Rp 50.000,00-",
      itemQuantity: 1,
      image: img2,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Sarung Kaki",
      itemPrice: "Rp 25.000,00-",
      itemQuantity: 1,
      image: img3,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Kaos Tangan",
      itemPrice: "Rp 25.000,00-",
      itemQuantity: 1,
      image: img4,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Sepatu",
      itemPrice: "Rp 300.000,00-",
      itemQuantity: 1,
      image: img5,
    },
  ];
  let itemList = dataItem.map((data) => {
    return (
      <CartContainer
        img={data.image}
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
