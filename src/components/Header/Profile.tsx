import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Miguel Leite</Text>
        <Text color="gray.300" fontSize="small">
          miguelleite200leite@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Miguel Leite" src="https://github.com/Miguel-Leite.png" borderWidth={1} borderColor="purple.500" />
    </Flex>
  );
}