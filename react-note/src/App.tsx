import Counter from "./components/Count";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import D3 from "./components/D3BarChart";
import D3Update from "./components/D3Update";
import TransitionEx from "./components/D3Transition";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Counter />
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TodoList />
        <TodoAdd />
      </Box>
      {/* <D3 />
      <D3Update /> */}
      <TransitionEx />
    </ChakraProvider>
  );
}

export default App;
