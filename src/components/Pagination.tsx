import { Box, Button, HStack, Stack } from "@chakra-ui/react";


export function Pagination() {

  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="purple"
          disabled
          _disabled={{
            bgColor: "purple.500",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="purple"
          bg="gray.700"
          _hover={{
            bg: "gray.500"
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="purple"
          bg="gray.700"
          _hover={{
            bg: "gray.500"
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="purple"
          bg="gray.700"
          _hover={{
            bg: "gray.500"
          }}
        >
          4
        </Button>
      </HStack>
    </Stack>
  );
}