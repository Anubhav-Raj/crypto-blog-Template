import {
  Container,
  Stack,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <Container
      h="100vh"
      maxW="1300px"
      display="flex"
      alignItems="center"
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack mt={{ base: "8", md: "0" }} height="350px" justify="space-around">
        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }} as= "h1">  
          Get Crypto Related Knowledge
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          as="p"
          maxW={{ base: "100%", md: "80%" }}
        >
          The space key allows you to customize the global spacing and sizing
          scale for your project. By default these spacing value can be
          referenced by the padding, margin, and top, left, right, bottom
          styles.
        </Text>
        <Box>
          <Button colorScheme="orange">Cheack Post</Button>
        </Box>
      </Stack>
      <Flex mt={{ base: "8", md: "0" }} justifyContent="center">
        <Image
         
           width={{ base:'80%',md:'auto' }}
            mr='4'
          src="/images/btc.svg"
        />
      </Flex>
    </Container>
  );
}

export default Hero;
