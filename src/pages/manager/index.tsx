import { Box, Text, Stack, Button, Input, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form"

import Header from "next/head"
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit } = useForm()
  const { signIn } = useAuth()
  const toast = useToast()

  async function handleSignIn(data) {
    setLoading(true)
    try {
      await signIn({
        username: data.username,
        password: data.password
      }) 
      setLoading(false)
    } catch (error) {
      if (error?.response.data.error === "User not found") {
        toast({
          title: "Usuário não encontrado",
          description: "nome de usuário/senha incorreto",
          status: 'error',
          duration: 9000,
          isClosable: true
        })
        setLoading(false)
      } else {
        toast({
          title: "Error inesperado",
          status: 'error',
          duration: 9000,
          isClosable: true
        })
        console.error(error)
        setLoading(false)
      }
    }
  }

  return (
    <>
    <Header>
      <title>Login</title>
    </Header>
    <Box
      width={"100vw"}
      height={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Box
          w={350}
          py={4}
          px={4}
          backgroundColor="badge"
          borderRadius="base"
          color="branco"
        >
          <Text
            fontSize="xl"
            fontWeight={"bold"}
            textAlign="center"
            marginBottom={5}
          >
            Faça login
          </Text>

          <Stack
            spacing={3}
          >
            <Input
              {...register('username')}
              name="username"
              variant={"flushed"}
              type="text"
              placeholder="Usuário"
              size="md"
              maxLength={20}
            />

            <Input
              {...register('password')}
              name="password"
              variant={"flushed"}
              type="password"
              placeholder="Senha"
              size="md"
              minLength={6}
            />

            <Button
              type="submit"
              backgroundColor="primaria"
              transition={"all 0.2s ease-in-out"}
              marginTop={5}
              _hover={{
                filter: "brightness(0.8)",
              }}
              isLoading={loading}
            >
              Entrar
            </Button>
          </Stack>
        </Box>
      </form>
    </Box>
    </>
  )
}