import React from "react";
import {
  HStack,
  Flex,
  Img,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  Text,
  Spacer,
} from "@chakra-ui/react";
import artboard from "./img/artboard.png";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { BsCartFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

function Navbar() {
  return (
    <Box bgColor="#F1EFEF" maxWidth="100%">
      <HStack bgColor="#B4B4B3" p="5px">
        <Link fontSize="12px">Download WARUNGTIKET App</Link>
        <Spacer></Spacer>
        <HStack spacing="30px">
          <Link fontSize="12px">Tentang WARUNGTIKET</Link>
          <Link fontSize="12px">Hubungi WARUNGTIKET </Link>
          <Link fontSize="12px">Kritik & Saran</Link>
          <Link fontSize="12px">FAQ</Link>
        </HStack>
      </HStack>

      <Box>
        <Flex
          w="100%"
          px="0"
          py="0"
          align="center"
          justifyContent="space-between"
        >
          <Box ml="50px">
            <Img src={artboard} h="80px" alt="logo" />
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
              {/* type="text"
              placeholder="Cari di WARUNGTIKET"
              border="1px solid #949494"
              w="700px" */}
            </InputGroup>
          </HStack>
          <HStack spacing="20px" ml="0">
            <BsCartFill size="30px" />
            <MdEmail size="30px" />
            <IoNotificationsSharp size="30px" />
          </HStack>
          <Box>
            <RiAccountCircleFill size="30px" />
          </Box>
        </Flex>
      </Box>
      <Box>
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
