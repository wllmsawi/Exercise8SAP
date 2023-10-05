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
} from "@chakra-ui/react";
import artboard from "./img/artboard.png";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { BsCartFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

function Navbar() {
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
          <HStack spacing="20px">
            <Link to="#Kategori">Kategori</Link>
            <InputGroup w="800px">
              <InputLeftElement>
                <Search2Icon color="black" />
              </InputLeftElement>
              <Input
                type="text"
                variant="filled"
                placeholder="Cari di WARUNGTIKET"
              />
            </InputGroup>
          </HStack>
          <HStack ml="0">
            <IconButton
              variant="ghost"
              icon={<BsCartFill size="24px" bg="red" />}
            ></IconButton>
            <IconButton
              variant="ghost"
              icon={<MdEmail size="24px" />}
            ></IconButton>
            <IconButton
              variant="ghost"
              icon={<IoNotificationsSharp size="24px" />}
            ></IconButton>
          </HStack>
          <Box>
            <IconButton
              variant="ghost"
              icon={<RiAccountCircleFill size="24px" />}
            ></IconButton>
          </Box>
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
