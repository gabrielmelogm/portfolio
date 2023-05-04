import Head from "next/head"
import { Box, Text } from "@chakra-ui/react";

import { Sidebar } from "../../components/Manager/Sidebar";
import { useAuth } from "../../hooks/useAuth";
import { Projetos } from "../../components/Manager/Tables/Projetos";

export default function Main() {
  const { user } = useAuth()

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box
        w="100vw"
        h="100vh"
        display="flex"
        boxShadow="base"
        bg="background"
      >
        <Sidebar />
        <Box
          w="100%"
          padding="3rem"
        >
          <Projetos />
        </Box>
      </Box>
    </>
  )
}