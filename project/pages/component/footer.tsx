import { Box, Flex,  Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box height="25%">
      <Flex align="center" justify="center" mt="15%">
        <Text fontSize="md">JOIN OUR NEWSLETTER</Text>
      </Flex>

      <Box>
        <Flex align="center" justify="center" mt="10%">
          <Box p="2%">
            <Text fontSize="sm" fontWeight={300}>
              Instagram
            </Text>
          </Box>
          <Box p="2%">
            <Text fontSize="sm" fontWeight={300}>
              Twitter
            </Text>
          </Box>
          <Box p="2%">
            <Text fontSize="sm" fontWeight={300}>
              Facebook
            </Text>
          </Box>
          <Box p="2%">
            <Text fontSize="sm" fontWeight={300}>
              PInterest
            </Text>
          </Box>
          <Box p="2%">
            <Text fontSize="sm" fontWeight={300}>
              Youtube
            </Text>
          </Box>
          <Box p="2%">
            <Text fontSize="sm" fontWeight={300}>
              spotify
            </Text>
          </Box>
        </Flex>
      </Box>
     
      <Box></Box>
    </Box>
  );
}

export default Footer