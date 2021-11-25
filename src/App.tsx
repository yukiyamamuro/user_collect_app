import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/them";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
}
