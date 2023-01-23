import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

function BidCard({ info }) {
  const { img, type, Action, title, react, subTitle, highestBid, EndAction } =
    info;
  return (
    <Flex justify="center" align="center">
      <Stack
        width="320px"
        boxShadow="2xl"
        borderRadius="xl"
        bg="blue.800"
        p={5}
      >
        <Stack>
          <Flex justifyContent="space-between" align="center">
            <Box
              border="1px"
              borderColor="gray.200"
              px={2}
              textAlign="center"
              borderRadius={15}
            >
              <Text color={'white'}>Hot Deal</Text>
            </Box>
            <Box
              border="1px"
              borderColor="gray.200"
              px={3}
              textAlign="center"
              borderRadius={15}
            >
              <Text color={'white'}>Action</Text>
            </Box>
          </Flex>
        </Stack>
        <Stack p="2">
          <Image src={img} alt="image" borderRadius="10px" />

          <Flex justifyContent="space-between">
            <Stack>
              <Heading fontSize="lg" color={'white'}>
                {title}
              </Heading>
            </Stack>

            <Stack>
              <Flex justify={'space-around'} gap="1" align="center">
                <AiFillHeart color="red" />
                <Text color={'white'}>{react}</Text>
              </Flex>
            </Stack>
          </Flex>

          <Text fontSize={'xs'} color={'cyan.400'} fontWeight="bold">
            {subTitle}
          </Text>
        </Stack>
        <Stack p={5}>
          <Flex justifyContent="space-between" align="center" gap={1}>
            <Box
              border="1px"
              borderColor="gray.200"
              p={2}
              textAlign="center"
              w={'300px'}
            >
              <Text color={'white'} fontWeight="bold" fontSize={'xs'}>
                HIGHEST BID
              </Text>
              <Text fontWeight="bold" color={'white'}>
                $ {highestBid}
              </Text>
            </Box>
            <Box
              border="2px"
              borderColor="tomato"
              p={2}
              textAlign="center"
              w={'400px'}
            >
              <Text color={'cyan.200'} fontSize={'xs'}>
                ACTIONS ENDS IN
              </Text>
              <Text fontWeight="bold" color={'white'}>
                {EndAction}
              </Text>
            </Box>
          </Flex>
        </Stack>
        <Button w="full" bg={'cyan.300'}>
          Bid Now
        </Button>
      </Stack>
    </Flex>
  );
}

export default BidCard;
