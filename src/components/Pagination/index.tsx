import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";


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
        <PaginationItem number="1" isCurrent />
        <PaginationItem number="2" />
        <PaginationItem number="3" />
        <PaginationItem number="4" />
        <PaginationItem number="5" />
        <PaginationItem number="6" />
      </HStack>
    </Stack>
  );
}