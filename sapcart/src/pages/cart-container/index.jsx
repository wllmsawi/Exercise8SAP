import { Box, Text, VStack, Grid } from "@chakra-ui/react";
import img1 from "../../pages/cart-container/image/1.jpg";
import img2 from "../../pages/cart-container/image/2.jpg";
import img3 from "../../pages/cart-container/image/3.jpg";
import img4 from "../../pages/cart-container/image/4.jpg";
import img5 from "../../pages/cart-container/image/5.jpg";
import Card from "./components/cards";
import { addToCart } from "../../store/reducers/Counter";
import { useDispatch } from "react-redux";
function CartContainer() {
  const dispatch = useDispatch();
  const dataItem = [
    {
      key: 1,
      storeName: "Toko Makassar",
      storeLoc: "Seturan",
      itemName: "Celana",
      itemPrice: "Rp 100.000,00-",
      itemQuantity: 1,
      img: img1,
    },
    {
      key: 2,
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Baju",
      itemPrice: "Rp 50.000,00-",
      itemQuantity: 1,
      img: img2,
    },
    {
      key: 3,
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Sarung Kaki",
      itemPrice: "Rp 25.000,00-",
      itemQuantity: 1,
      img: img3,
    },
    {
      key: 4,
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Kaos Tangan",
      itemPrice: "Rp 25.000,00-",
      itemQuantity: 1,
      img: img4,
    },
    {
      key: 5,
      storeName: "Toko Madura",
      storeLoc: "Seturan",
      itemName: "Sepatu",
      itemPrice: "Rp 300.000,00-",
      itemQuantity: 1,
      img: img5,
    },
  ];
  let itemList = dataItem.map((data, index) => {
    return (
      <Card
        id={index}
        img={data.img}
        itemName={data.itemName}
        itemPrice={data.itemPrice}
        onClick={() => dispatch(addToCart(data))}
      />
    );
  });
  return (
    <Box p="1em 1.5em" paddingTop={"0"}>
      <VStack spacing={"1em"}>
        <Box>
          <Text as="b" fontSize="2.5em">
            DAFTAR ITEM
          </Text>
        </Box>
        <Box>
          <Grid templateColumns="repeat(4, 1fr)" templateRows="fr fr" gap={6}>
            {itemList}
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
}

export default CartContainer;
