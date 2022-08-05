import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import LinkComponent from './Components/LinkComponent';
import {AiFillGithub, AiFillFacebook, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
function App() {

// Array of link objects
  const links = [
    {url: "https://www.keaganroach.com/", icon: <AiFillGithub/>, color1: "gray.500", color2: "purple.400"},
    {url: "https://www.keaganroach.com/", icon: <AiFillYoutube/>, color1: "gray.500", color2: "blue.400"},
    {url: "https://www.keaganroach.com/", icon: <AiFillInstagram/>, color1: "gray.500", color2: "green.400"},
    {url: "https://www.keaganroach.com/", icon: <AiFillAmazonCircle/>, color1: "gray.500", color2: "yellow.400"},
    {url: "https://www.keaganroach.com/", icon: <AiFillFacebook/>, color1: "gray.500", color2: "orange.400"},
  ]

// Basic Page Layout
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Flex w="100%" justifyContent="center">
            <LinkComponent image="./logo512.png" links={links}/>
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
