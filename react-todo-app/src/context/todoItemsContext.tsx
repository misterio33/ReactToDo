import { createContext, ReactElement, useState } from "react";
import { TodoItemModel } from "../models/todoItemModel";

interface TodoItemsProps {
  children: ReactElement;
}

interface TodoItemProps {
  todoItems: TodoItemModel[];
  doneTodoItems: TodoItemModel[];
  doneHandler: (itemToUndone: TodoItemModel) => void;
  unDoneHandler: (itemToUndone: TodoItemModel) => void;
  addHandler: (title: string, description: string) => void;
  deleteHandler: (itemToDelete: TodoItemModel) => void;
}

const TodoItemContext = createContext({} as TodoItemProps);

const TodoItemProvider = (props: TodoItemsProps) => {
  const [doneTodoItems, setDoneTodoItems] = useState<TodoItemModel[]>([]);
  const [todoItems, setTodoItems] = useState<TodoItemModel[]>([
    {
      title: "title1",
      description: "Description for the first task",
      isDone: false,
      createdAt: new Date(),
    },
    {
      title: "title2",
      description: "Description for the second task",
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  function handleAdd(title: string, description: string) {
    setTodoItems((prevState) => {
      return [
        {
          title: title,
          description: description,
          isDone: false,
          createdAt: new Date(),
        },
        ...prevState,
      ];
    });
  }

  function handleDelete(itemToDelete: TodoItemModel) {
    itemToDelete.isDone
      ? setDoneTodoItems((prevState) => {
          return prevState.filter((item) => item !== itemToDelete);
        })
      : setTodoItems((prevState) => {
          return prevState.filter((item) => item !== itemToDelete);
        });
  }

  function handleDone(doneItem: TodoItemModel) {
    setDoneTodoItems((prevState) => {
      doneItem.isDone = true;
      return [doneItem, ...prevState];
    });

    setTodoItems((prevState) => {
      return prevState.filter((item) => item !== doneItem);
    });
  }

  function handleUnDone(doneItem: TodoItemModel) {
    setTodoItems((prevState) => {
      doneItem.isDone = false;
      return [doneItem, ...prevState];
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
          doneHandler: handleDone,
          unDoneHandler: handleUnDone,
          addHandler: handleAdd,
          deleteHandler: handleDelete,
        }}
      >
        {props.children}
      </TodoItemContext.Provider>
    </>
  );
};

export { TodoItemProvider, TodoItemContext };
