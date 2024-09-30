import { ChakraTheme, extendTheme } from "@chakra-ui/react";

const configTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  colors: {
    cinza_claro: "#333",
    cinza_escuro: "#191919",
    branco: "#FFF",
    branco_gelo: "#d1d1d1",
    preto: "#000",
  },
  styles: {
    global: {
      html: { height: "100vh", scrollBehavior: "smooth" },
      body: {
        height: "100vh",
      },
    },
  },
};

export const theme = extendTheme(configTheme);
