import { Container, Grid, GridItem,Heading } from "@chakra-ui/react";
import PostCard from "./postCard";
 import {blogData}  from  "../../data/index"
const recentpost = () => {
  return (
    <Container maxW="1300px">
    <Heading m='8' fontSize="2xl"> Recent Post</Heading>
      <Grid
        gridGap="4"
        gridTemplateColumns="repeat(auto-fit,minMax(20rem,1fr))"
      >
        {blogData.map((post,key)=>(
            <GridItem key={post.title} display="flex" justifyContent="center">
          <PostCard  post={post}/>
        </GridItem>
        ))}
      </Grid>
      <Heading m='8'  textAlign='center' fontSize="2xl"> Read More ...</Heading>
    </Container>
  );
};

export default recentpost;
