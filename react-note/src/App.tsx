import Counter from './components/Count'
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Counter/>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  )
}

export default App
