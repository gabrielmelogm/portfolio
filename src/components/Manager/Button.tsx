import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface CustomButtonProps extends ButtonProps {
  backgroundColor?: string
  children: ReactNode
}

export function Button(props: CustomButtonProps) {
  return (
    <ChakraButton
      {...props}
      backgroundColor={props.backgroundColor || "primaria"}
    >
      {props.children}
    </ChakraButton>
  )
}