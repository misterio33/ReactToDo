import { createContext, ReactElement, useState } from "react";
import { TodoItemModel } from "../models/todoItemModel";

interface TodoItemsProps {
  children: ReactElement;
}

interface TodoItemProps {
  todoItems: TodoItemModel[];
  doneTodoItems: TodoItemModel[];
  addToDoneHandler: (itemToUndone: TodoItemModel) => void;
  unDoneHandler: (itemToUndone: TodoItemModel) => void;
  onAddHandler: (title: string, description: string) => void;
  onDeleteHandler: (itemToDelete: TodoItemModel) => void;
}

const TodoItemContext = createContext({} as TodoItemProps);

const TodoItemProvider = (props: TodoItemsProps) => {
  const [doneTodoItems, setDoneTodoItems] = useState<TodoItemModel[]>([]);
  const [todoItems, setTodoItems] = useState<TodoItemModel[]>([
    { title: "title1", description: "descs1", level: "level1", isDone: false },
    { title: "title2", description: "descs2", level: "level2", isDone: false },
  ]);

  function handleAddTodo(title: string, description: string) {
    setTodoItems((prevState) => {
      return [
        ...prevState,
        {
          title: title,
          description: description,
          level: "level",
          isDone: false,
        },
      ];
    });
  }

  function handleDeleteTodo(itemToDelete: TodoItemModel) {
    setTodoItems((prevState) => {
      return prevState.filter((item) => item !== itemToDelete);
    });
  }

  function handleAddToDone(doneItem: TodoItemModel) {
    setDoneTodoItems((prevState) => {
      doneItem.isDone = true;
      return [...prevState, doneItem];
    });

    setTodoItems((prevState) => {
      return prevState.filter((item) => item !== doneItem);
    });
  }

  function handleUnDone(doneItem: TodoItemModel) {
    setTodoItems((prevState) => {
      doneItem.isDone = false;
      return [...prevState, doneItem];
    });

    setDoneTodoItems((prevState) => {
      return prevState.filter((item) => item !== doneItem);
    });
  }

  return (
    <>
      <TodoItemContext.Provider
        value={{
          todoItems: todoItems,
          doneTodoItems: doneTodoItems,
          addToDoneHandler: handleAddToDone,
          unDoneHandler: handleUnDone,
          onAddHandler: handleAddTodo,
          onDeleteHandler: handleDeleteTodo,
        }}
      >
        {props.children}
      </TodoItemContext.Provider>
    </>
  );
};

export { TodoItemProvider, TodoItemContext };
