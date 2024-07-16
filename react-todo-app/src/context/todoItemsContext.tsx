import { createContext, ReactElement, useState } from "react";
import { TodoItemModel } from "../models/todoItemModel";

interface TodoItemsProps {
  children: ReactElement;
}

interface TodoItemProps {
  todoItems: TodoItemModel[];
  onAddHandler: (title: string, description: string) => void;
  onDeleteHandler: (itemToDelete: TodoItemModel) => void;
}

const TodoItemContext = createContext({} as TodoItemProps);

const TodoItemProvider = (props: TodoItemsProps) => {
  const [todoItems, setTodoItems] = useState<TodoItemModel[]>([
    { title: "title1", description: "descs1", level: "level1" },
    { title: "title2", description: "descs2", level: "level2" },
    { title: "title3", description: "descs3", level: "level3" },
    { title: "title4", description: "descs4", level: "level4" },
  ]);

  function handleAddTodo(title: string, description: string) {
    setTodoItems([
      ...todoItems,
      { title: title, description: description, level: "level" },
    ]);
  }

  function handleDeleteTodo(itemToDelete: TodoItemModel) {
    setTodoItems((prevState) => {
      return prevState.filter((item) => item !== itemToDelete);
    });
  }

  return (
    <>
      <TodoItemContext.Provider
        value={{
          todoItems: todoItems,
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
