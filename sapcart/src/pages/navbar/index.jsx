import React from "react";
import {
  HStack,
  Flex,
  Img,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  Spacer,
  IconButton,
  Text,
  Center,
} from "@chakra-ui/react";
import artboard from "./img/artboard.png";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { BsCartFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbar() {
  const navigate = useNavigate();
  const value = useSelector((state) => state.counter.value);
  function showCart() {
    navigate("Checkout");
  }
  return (
    <Box>
      <HStack bgColor="#B4B4B3" p=".5em 2.5em">
        <Link fontSize="12px">Download WARUNGTIKET App</Link>
        <Spacer></Spacer>
        <HStack spacing="30px">
          <Link fontSize="12px">Tentang WARUNGTIKET</Link>
          <Link fontSize="12px">Hubungi WARUNGTIKET </Link>
          <Link fontSize="12px">Kritik & Saran</Link>
          <Link fontSize="12px">FAQ</Link>
        </HStack>
      </HStack>
      <Box bgColor="#F1EFEF" maxWidth="100%" p="1em 2.5em">
        <Flex
          w="100%"
          px="0"
          py="0"
          align="center"
          justifyContent="space-between"
        >
          <Box>
            <Img src={artboard} h="40px" alt="logo" />
          </Box>
          <Spacer />
          <Link to="#Kategori">Kategori</Link>
          <Spacer />
          <HStack spacing="20px">
            <InputGroup>
              <InputLeftElement>
                <Search2Icon color="black" />
              </InputLeftElement>
              <Input
                type="text"
                variant="outline"
                placeholder="Cari di WARUNGTIKET"
                border="2px solid lightgray"
                w="40em"
              />
            </InputGroup>
          </HStack>
          <Spacer />
          <Flex>
            <HStack ml="0" p="0 .5em" borderRight="2px solid lightgray">
              <Flex position="relative">
                <IconButton
                  size="md"
                  onClick={showCart}
                  variant="ghost"
                  bgColor="transparent"
                  _hover={{ bg: "transparent" }}
                  icon={<BsCartFill size="24px" bg="red" />}
                />
                <Text
                  fontSize="0.75em"
                  position={"absolute"}
                  right="0"
                  w={"1.5em"}
                  h={"1.5em"}
                  bgColor={"lightgray"}
                  borderRadius={"50%"}
                >
                  <Center>{value}</Center>
                </Text>
              </Flex>
              <Flex position="relative">
                <IconButton
                  variant="ghost"
                  bgColor="transparent"
                  _hover={{ bg: "transparent" }}
                  icon={<MdEmail size="24px" />}
                />

                <Text
                  position="absolute"
                  fontSize="0.75em"
                  right="0"
                  size="xs"
                  w={"1.5em"}
                  h={"1.5em"}
                  bgColor={"lightgray"}
                  borderRadius={"50%"}
                >
                  <Center>15</Center>
                </Text>
              </Flex>
              <Flex position="relative">
                <IconButton
                  variant="ghost"
                  bgColor="transparent"
                  _hover={{ bg: "transparent" }}
                  icon={<IoNotificationsSharp size="24px" />}
                ></IconButton>
                <Text
                  fontSize="0.75em"
                  right="0"
                  position="absolute"
                  size="xs"
                  w={"1.5em"}
                  h={"1.5em"}
                  bgColor={"lightgray"}
                  borderRadius={"50%"}
                >
                  <Center>23</Center>
                </Text>
              </Flex>
            </HStack>
            <Box>
              <IconButton
                variant="ghost"
                bgColor="transparent"
                _hover={{ bg: "transparent" }}
                icon={<RiAccountCircleFill size="24px" />}
              ></IconButton>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box bgColor="#F1EFEF" p="0.5em 0">
        <Flex w="100%" px="0" py="0" align="center" justifyContent="center">
          <HStack spacing="30px" fontSize="12px">
            <Link to="#">Tiket Konser</Link>
            <Link to="#">Tiket Wahana</Link>
            <Link to="#">Tiket Bioskop</Link>
            <Link to="#">Tiket Workshop</Link>
            <Link to="#">Tiket Talkshow</Link>
            <Link href="https://www.durex.co.id/" isExternal>
              Info Kondom Gratis
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;
