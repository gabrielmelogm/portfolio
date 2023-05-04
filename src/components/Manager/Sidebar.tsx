import { Avatar, Box, List, ListItem, Text } from "@chakra-ui/react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { ReactNode, useState } from "react";

interface ItensMenuProps {
  icon: ReactNode
  label: string
}

export function Sidebar() {
  const [ open, setOpen ] = useState(false)

  const itens: ItensMenuProps[] = [
    {
      icon: <AiOutlineFundProjectionScreen size={40} />,
      label: "Projetos"
    },
  ]

  return (
    <Box
      w={open ? 265 : 70}
      transition="all 0.3s ease-in-out"
      h="100vh"
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      overflow="hidden"
      bg="background"
      _hover={{
        cursor: 'pointer'
      }}

      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <Box
        paddingLeft={3}
      >
        <Avatar
          src="https://github.com/gabrielmelogm.png"
          marginTop={5}
        />
      </Box>

      <List
        w="100%"
        marginTop={7}
        display="flex"
        flexDir="column"
        gap={1}
      >
        {
          itens.map((item, index) => (
            <ListItem
              key={index}

              w="100%"
              color="gray.600"
            >
              <Box
                padding="0.5rem 0 0.5rem 1rem"
                display="flex"
                alignItems="center"
                gap={3.5}
                fontSize="1rem"
                transition="all 0.2s ease-in-out"
                _hover={{
                  cursor: "pointer",
                  color: "gray.100",
                  bg: "primaria"
                }}
              >
                <Text>{item.icon}</Text>
                <Text>{item.label}</Text>
              </Box>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}