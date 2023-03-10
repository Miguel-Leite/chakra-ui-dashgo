
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "@/src/components/Pagination";
import Link from "next/link";


export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button
              as={Link}
              size="sm"
              fontSize="sm"
              colorScheme="purple"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              href="/users/create"
            >
              Criar novo
            </Button>
          </Flex>
          
          <Table colorScheme="whiteAlpha" size={["xs","sm", "md"]}>
            <Thead>
              <Tr>
                <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="purple" />
                </Th>
                <Th> Usuário </Th>
                { isWideVersion && <Th> Data de cadastro </Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4","6"]} >
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Miguel Leite</Text>
                    <Text fontSize="sm" color="gray.300">miguelleite200leite@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>01 de Fevereiro, 2023</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blue"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]} >
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Miguel Leite</Text>
                    <Text fontSize="sm" color="gray.300">miguelleite200leite@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>01 de Fevereiro, 2023</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blue"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]} >
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Miguel Leite</Text>
                    <Text fontSize="sm" color="gray.300">miguelleite200leite@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>01 de Fevereiro, 2023</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blue"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}