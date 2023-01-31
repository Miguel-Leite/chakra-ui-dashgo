import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest } : InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>E-mail</FormLabel>}
      <ChakraInput
        name={name}
        type={name}
        focusBorderColor="purple.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bg: 'gray.900' }}
        size="lg"
        id={name}
        {...rest}
      />
    </FormControl>
  )
}