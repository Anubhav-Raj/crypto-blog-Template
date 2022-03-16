import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import React from "react";
const Navbar = () => {
  return (
    <Container
      as="nav"
      maxW="1300px"
      display="flex"
      justifyContent="space-between"
      p="4"
      boxShadow="lg"
      borderRadius="lg"
      position="sticky"
      top="0"
      zIndex="50"
      bg="white"
    >
      <Flex align="center">
        <Image mr="4" h="50px" w="50px" src="/images/btc.svg" />
        <Link href="/"> Home</Link>
      </Flex>
      <Flex align="center">
        <Link href="/" mr="4">
          Post
        </Link>
        <Link href="/" mr="4">
          Trending
        </Link>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            w={{ base: "100px", sm: "160px", md: "auto" }}
            type="text"
            placeholder="Search"
          />
        </InputGroup>
      </Flex>
    </Container>
  );
};

export default Navbar;
