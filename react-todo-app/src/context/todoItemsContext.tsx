import { createContext, ReactElement, useState } from "react";
import { TodoItemModel } from "../models/todoItemModel";

interface TodoItemsProps {
  children: ReactElement;
}

interface TodoItemProps {
  todoItems: TodoItemModel[];
  doneTodoItems: TodoItemModel[];
  markAsDoneHandler: (itemToUndone: TodoItemModel) => void;
  markAsUnDoneHandler: (itemToUndone: TodoItemModel) => void;
  addHandler: (title: string, description: string) => void;
  deleteHandler: (itemToDelete: TodoItemModel) => void;
}

const TodoItemContext = createContext({} as TodoItemProps);

const TodoItemProvider = ({ children }: TodoItemsProps) => {
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
      return [{ ...doneItem, isDone: true }, ...prevState];
    });

    setTodoItems((prevState) => {
      return prevState.filter((item) => item !== doneItem);
    });
  }

  function handleUnDone(doneItem: TodoItemModel) {
    setTodoItems((prevState) => {
      return [{ ...doneItem, isDone: false }, ...prevState];
    });

    setDoneTodoItems((prevState) => {
      return prevState.filter((item) => item !== doneItem);
    });
  }

  const contextValue: TodoItemProps = {
    todoItems: todoItems,
    doneTodoItems: doneTodoItems,
    markAsDoneHandler: handleDone,
    markAsUnDoneHandler: handleUnDone,
    addHandler: handleAdd,
    deleteHandler: handleDelete,
  };

  return (
    <>
      <TodoItemContext.Provider value={contextValue}>
        {children}
      </TodoItemContext.Provider>
    </>
  );
};

export { TodoItemProvider, TodoItemContext };
