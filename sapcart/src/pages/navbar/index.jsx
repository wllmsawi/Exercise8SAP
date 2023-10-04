import React from "react";
import {
  Stack,
  HStack,
  Flex,
  Image,
  Button,
  Img,
  Container,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "./img/logo.png";
import {Search2Icon} from "@chakra-ui/icons"
import { Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <Container w="100%" bgColor="gray">
      <Flex
        w="100%"
        px="0"
        py="0"
        align="center"
        justifyContent="space-between"
      >
        <Box>
          <Img src={logo} h="100px" alt="logo" />
        </Box>
        <Box>
          <Link to="#Kategori">Kategori</Link>
        </Box>
        <Box>
          <InputGroup size="lg" borderRadius="5px">
            <InputLeftElement
              children={<Search2Icon color="white" />}
            ></InputLeftElement>
            <Input
              type="text"
              placeholder="Search..."
              border="1px solid #949494"
            />
          </InputGroup>
        </Box>
      </Flex>
    </Container>
  );
}

export default Navbar;
