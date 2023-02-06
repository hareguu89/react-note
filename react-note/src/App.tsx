import Counter from './components/Count'
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import D3 from './components/D3';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Counter/>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TodoList />
        <TodoAdd />
      </Box>
      <D3 />
    </ChakraProvider>
  )
}

export default App
