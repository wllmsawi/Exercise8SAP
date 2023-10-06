import React, { useState, useContext } from "react";
import { Context } from "../../context";
import { Text, Box } from "@chakra-ui/react";
import CartContainer from "../cart-container";

function TestingCart() {
  const { items, setItems } = useContext(Context);
  setItems({
    nama: "Putu",
  });
  console.log(setItems);
  return (
    <Box>
      <Text as="b">Testing cart using useContext</Text>
      <CartContainer />
    </Box>
  );
}

export default TestingCart;
