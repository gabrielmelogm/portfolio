import { Box, Table as ChakraTable,TableContainer, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Button } from "../../components/Manager/Button"

interface TableProps {
  columns: string[]
  addFunction: () => void
  children: ReactNode
}

export function Table(props: TableProps) {
  return (
    <Box
    padding={3}
    borderRadius="base"
    marginBottom="2rem"
    color="branco"
    backgroundColor="badge"
    >
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize={30}
          fontWeight="bold"
        >
          Projetos
        </Text>
        <Button onClick={props.addFunction}>
          Adicionar
        </Button>
      </Box>
      <TableContainer>
        <ChakraTable variant="simple">
          <Thead>
            <Tr>
              {
                props.columns.map((column) => (
                  <Th key={column} color="gray.200">{column}</Th>
                ))
              }
            </Tr>
          </Thead>
          <Tbody>
            {props.children}
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Box>
  )
}