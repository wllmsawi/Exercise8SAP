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
  VStack,
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
import breakpoints from "../../theme";

function Navbar() {
  const navigate = useNavigate();
  const value = useSelector((state) => state.counter.value);
  function showCart() {
    navigate("Checkout");
  }
  return (
    <Box>
      <Flex
        bgColor={"gray"}
        p=".5em 2.5em"
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
      >
        <Box>
          <Link fontSize={".75em"}>Download WARUNGTIKET App</Link>
        </Box>
        <Spacer />
        <Box>
          <HStack spacing={"2em"}>
            <Link fontSize={".75em"}>Tentang WARUNGTIKET</Link>
            <Link fontSize={".75em"}>Hubungi WARUNGTIKET </Link>
            <Link fontSize={".75em"}>Kritik & Saran</Link>
            <Link fontSize={".75em"}>FAQ</Link>
          </HStack>
        </Box>
      </Flex>
      <Flex p=".5em 2.5em" bgColor={"lightgray"} alignItems={"flex-start"}>
        <Box display={{ base: "none", md: "block" }}>
          <Img src={artboard} h={"2.5em"} alt={"logo"} />
        </Box>
        <Spacer display={{ base: "none", md: "block" }} />
        <Box>
          <Link to={"#Kategori"} display={{ base: "none", md: "block" }}>
            Kategori
          </Link>
        </Box>
        <Spacer display={{ base: "none", md: "block" }} />
        <Box>
          <VStack align={"stretch"}>
            <Box>
              <InputGroup>
                <InputLeftElement>
                  <Search2Icon color={"black"} />
                </InputLeftElement>
                <Input
                  w={"100%"}
                  type={"text"}
                  variant={"outline"}
                  placeholder={"Cari di WARUNGTIKET"}
                  border={"2px solid gray"}
                />
              </InputGroup>
            </Box>
            <Box pt={".5em"} display={{ base: "none", md: "flex" }}>
              <HStack spacing={"2em"} fontSize={".75em"}>
                <Link to={"#"}>Tiket Konser</Link>
                <Link to={"#"}>Tiket Wahana</Link>
                <Link to={"#"}>Tiket Bioskop</Link>
                <Link to={"#"}>Tiket Workshop</Link>
                <Link to={"#"}>Tiket Talkshow</Link>
                <Link href={"https://www.durex.co.id/"} isExternal>
                  Info Kondom Gratis
                </Link>
              </HStack>
            </Box>
          </VStack>
        </Box>
        <Spacer />
        <Box>
          <Flex>
            <HStack p={"0 .5em"} borderRight={"2px solid gray"}>
              <Flex position={"relative"}>
                <IconButton
                  size={"md"}
                  onClick={showCart}
                  variant={"ghost"}
                  bgColor={"transparent"}
                  _hover={{ bg: "transparent" }}
                  icon={<BsCartFill size={"1.5em"} />}
                />
                <Text
                  fontSize="0.75em"
                  position={"absolute"}
                  right="0"
                  w={"1.5em"}
                  h={"1.5em"}
                  bgColor={"lightgray"}
                  borderRadius={"50%"}
                  as={"b"}
                >
                  <Center alignItems={"center"}>{value}</Center>
                </Text>
              </Flex>
              <Flex position="relative" display={{ base: "none", md: "block" }}>
                <IconButton
                  variant="ghost"
                  bgColor="transparent"
                  _hover={{ bg: "transparent" }}
                  icon={<MdEmail size="24px" />}
                />

                <Text
                  fontSize="0.75em"
                  position={"absolute"}
                  right="0"
                  w={"1.5em"}
                  h={"1.5em"}
                  bgColor={"lightgray"}
                  borderRadius={"50%"}
                  as={"b"}
                >
                  <Center>15</Center>
                </Text>
              </Flex>
              <Flex position="relative" display={{ base: "none", md: "block" }}>
                <IconButton
                  variant="ghost"
                  bgColor="transparent"
                  _hover={{ bg: "transparent" }}
                  icon={<IoNotificationsSharp size="24px" />}
                ></IconButton>
                <Text
                  fontSize="0.75em"
                  position={"absolute"}
                  right="0"
                  w={"1.5em"}
                  h={"1.5em"}
                  bgColor={"lightgray"}
                  borderRadius={"50%"}
                  as={"b"}
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
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
