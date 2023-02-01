import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileDate?: boolean;
}

export function Profile({ showProfileDate = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileDate && (
        <Box mr="4" textAlign="right">
          <Text>Miguel Leite</Text>
          <Text color="gray.300" fontSize="small">
            miguelleite200leite@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Miguel Leite" src="https://github.com/Miguel-Leite.png" borderWidth={1} borderColor="purple.500" />
    </Flex>
  );
}