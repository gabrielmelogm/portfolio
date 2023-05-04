import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticToken: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    primaria: "#8257E5",
    secundaria: "#8892B0",
    terciaria: "#112240",
    branco: "#FFFFFF",
    cinza: "#D9D9D9",
    badge: "#212121",
    background: "#161616",
  },
});
