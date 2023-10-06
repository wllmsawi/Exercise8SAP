import { Box, Text, VStack, Image, HStack, Heading } from "@chakra-ui/react";
import img1 from "../../pages/cart-container/image/1.jpg";
import img2 from "../../pages/cart-container/image/2.jpg";
import img3 from "../../pages/cart-container/image/3.jpg";
import img4 from "../../pages/cart-container/image/4.jpg";
import img5 from "../../pages/cart-container/image/5.jpg";
import Card from "./components/cards";
function CartContainer() {
  const dataItem = [
    {
      storeName: "Toko Makassar",
      storeLoc: "Seturan",
      itemName: "Celana",
      itemPrice: "Rp 100.000,00-",
      itemQuantity: 1,
      img: img1,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Baju",
      itemPrice: "Rp 50.000,00-",
      itemQuantity: 1,
      img: img2,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Sarung Kaki",
      itemPrice: "Rp 25.000,00-",
      itemQuantity: 1,
      img: img3,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Kaos Tangan",
      itemPrice: "Rp 25.000,00-",
      itemQuantity: 1,
      img: img4,
    },
    {
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Sepatu",
      itemPrice: "Rp 300.000,00-",
      itemQuantity: 1,
      img: img5,
    },
  ];
  let itemList = dataItem.map((data) => {
    return (
      <Card
        img={data.img}
        itemName={data.itemName}
        itemPrice={data.itemPrice}
      />
    );
  });
  return (
    <Box h="auto" w="full" p="2.5em 1.5em">
      <Box p="2.5em 1.5em">
        <VStack>
          <Box>
            <Heading>Daftar Item</Heading>
          </Box>
          <Box>
            <HStack spacing="24px">{itemList}</HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default CartContainer;
