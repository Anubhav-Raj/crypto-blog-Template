import {
  Stack,
  Image,
  Heading,
  Flex,
  Avatar,
  Button,
  Text,
  Tag,
} from "@chakra-ui/react";

const postCard = ({post}) => {
  return (
    <Stack overflow='hidden' w="20rem" boxShadow="lg" borderRadius="lg">
      <Image src={post.imageUrl} />
      <Stack p="4">
        <Heading mb='4' fontSize='xl'> {post.title}</Heading>
        <Flex  mb='4' alignItems='center'>
          <Avatar  size='sm' mr='2' src={post.avatar} />
          <Text  fontSize='md' mr='2'fontWeight="bold">{post.authorName}</Text>
          <Text   fontSize='md'  mr='1' >{post.publishDate} </Text>
          </Flex>
          <Text mb='4'>
           {post.description}
          </Text>
        
        <Flex mb='4'>
        {post.tags.map((tegs)=>(<Tag mr='1' key={tegs}>{tegs}</Tag>))}
          
        </Flex>
        <Button alignSelf="flex-end" colorScheme="orange">
          Read More
        </Button>
      </Stack>
    </Stack>
  );
};
export default postCard;
