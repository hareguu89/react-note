import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store, { Todo } from "../store/Todo";

const TodoListItems = observer(() => (
  <>
    {store.todos.map((todo: Todo) => (
      <Flex pt={2} key={todo.id}>
        <Checkbox onClick={() => (todo.done = !todo.done)} />
        <Input
          mx={2}
          value={todo.text}
          onChange={(e) => (todo.text = e.target.value)}
        />
        <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
      </Flex>
    ))}
  </>
));

const TodoList = () => (
  <>
    <Heading>Todo List</Heading>
    <TodoListItems />
  </>
);

export default TodoList;
