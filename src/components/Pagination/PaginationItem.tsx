import { Button, ButtonProps } from "@chakra-ui/react";

interface PaginationItemProps extends ButtonProps{
  number: string;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent=false, number, ...rest }: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {...rest}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="purple"
      bg="gray.700"
      _hover={{
        bg: "gray.500"
      }}
      {...rest}
    >
      {number}
    </Button>
  );
}